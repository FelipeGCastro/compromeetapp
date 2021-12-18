import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import * as Google from 'expo-auth-session/providers/google'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { api, setTokenInterceptors } from '../services/api'

interface User {
  id: number
  name: string
  username: string
  email: string
  avatar_url: string | undefined
  friendships: number
  token: string
}
interface IAuthContextData {
  user: User
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
  getMe: () => Promise<void>
  userStorageloading: boolean
  setUsername: (username: string) => Promise<void>
  setUser: (user: User) => void
}

interface IAuthorizationResponse {
  params: {
    access_token: string
  }
  type: string
}
interface IAuthProviderProps {
  children: ReactNode
}
const AuthContext = createContext({} as IAuthContextData)

function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [userStorageloading, setUserStorageLoading] = useState(true)
  const userStorageKey = '@compromeet:user'
  const REDIRECT_URI = 'com.compromeetapp:/redirect'
  const CLIENT_ID = process.env.CLIENT_ID
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: CLIENT_ID,
    expoClientId: process.env.EXPO_CLIENT_ID,
    scopes: ['email', 'profile'],
    clientSecret: process.env.EXPO_CLIENT_SECRET,
    shouldAutoExchangeCode: true
  })

  useEffect(() => {
    const fetchUserFromApi = async () => {
      const { authentication } = response as {
        authentication: { accessToken: string }
      }
      if (authentication?.accessToken) {
        try {
          const result = await api.post('authenticate', {
            token: authentication?.accessToken
          })
          const { user: userInfo, token } = result.data
          const userLogged = {
            id: userInfo.id,
            email: userInfo.email,
            name: userInfo.name,
            username: userInfo.username,
            avatar_url: userInfo.avatar_url,
            friendships: userInfo.friendships,
            token: token
          }
          setUser(userLogged)
          await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
        } catch (error) {
          console.log(error)
        }
      }
    }
    if (response?.type === 'success' && !user.email) {
      fetchUserFromApi()
    }
  }, [response])

  useEffect(() => {
    let validator = true
    setTokenInterceptors(signOut)
    async function loadUserStorageDate() {
      if (validator) {
        const userStoraged = await AsyncStorage.getItem(userStorageKey)
        if (userStoraged && validator) {
          const userLogged = JSON.parse(userStoraged) as User
          setUser(userLogged)
        }
        if (validator) setUserStorageLoading(false)
      }
    }
    loadUserStorageDate()

    return () => {
      validator = false
    }
  }, [])

  async function signInWithGoogle() {
    try {
      promptAsync()
    } catch (error) {
      console.log(JSON.stringify(error, null, 2))
      throw new Error(error as string)
    }
  }

  async function setUsername(username: string) {
    try {
      const result = await api.put('username', { username })
      if (result.data) {
        const userLogged = { ...user, username }

        setUser(userLogged)
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
      }
    } catch (error) {
      console.log(error)
      throw new Error(error as string)
    }
  }

  async function signOut() {
    setUser({} as User)
    await AsyncStorage.clear()
  }

  async function getMe() {
    try {
      const result = await api.get('getme')
      setUser(result.data)
    } catch (error) {
      console.log('GET ME', error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
        userStorageloading,
        signOut,
        getMe,
        setUser,
        setUsername
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  return useContext(AuthContext)
}

export { useAuth, AuthProvider }
