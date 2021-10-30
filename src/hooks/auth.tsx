import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import * as AuthSession from 'expo-auth-session'
import * as AppleAuthentication from 'expo-apple-authentication'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface User {
  id: string
  name: string
  email: string
  avatar_url: string | undefined
}
interface IAuthContextData {
  user: User
  signInWithGoogle: () => Promise<void>
  signInWithApple: () => Promise<void>
  signOut: () => Promise<void>
  userStorageloading: boolean
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
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        )
        const userInfo = await response.json()
        const userLogged = {
          id: userInfo.id,
          email: userInfo.email,
          name: userInfo.name,
          avatar_url: userInfo.picture
        }
        setUser(userLogged)
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
      }
    } catch (error) {
      throw new Error(error as string)
    }
  }

  async function signInWithApple() {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL
        ]
      })
      if (credential) {
        const userLogged: User = {
          id: String(credential.user),
          email: credential.email!,
          name: `${credential.fullName!.givenName! || ''} ${
            credential.fullName!.middleName! || ''
          } ${credential.fullName!.familyName! || ''}`,
          avatar_url: undefined
        }

        setUser(userLogged)
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
      }
    } catch (error) {
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
        signInWithApple,
        userStorageloading,
        signOut
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
