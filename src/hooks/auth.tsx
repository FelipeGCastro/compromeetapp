import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import * as AuthSession from 'expo-auth-session'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { api, setTokenInterceptors } from '../services/api'
import { useNavigation } from '@react-navigation/core'

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
  userStorageloading: boolean
  setUsername: (username: string) => Promise<void>
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
      const CLIENT_ID = process.env.CLIENT_ID
      const REDIRECT_URI = process.env.REDIRECT_URI
      const RESPONSE_TYPE = 'token'
      const SCOPE = encodeURI('profile email')

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const { type, params } = (await AuthSession.startAsync({
        authUrl
      })) as IAuthorizationResponse

      if (type === 'success') {
        const result = await api.post('authenticate', {
          token: params.access_token
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
      }
    } catch (error) {
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
    await AsyncStorage.removeItem(userStorageKey)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
        userStorageloading,
        signOut,
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
