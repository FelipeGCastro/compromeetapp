import AsyncStorage from '@react-native-async-storage/async-storage'
import axios, { AxiosError } from 'axios'

const api = axios.create({
  // baseURL: 'http://192.168.1.86:3333'
  baseURL: 'https://compromeet-api.herokuapp.com/'
})
const getToken = async () => {
  const userStorageKey = '@compromeet:user'
  const user: string | null = await AsyncStorage.getItem(userStorageKey)
  return user ? JSON.parse(user).token : null
}

api.interceptors.request.use(async function (config) {
  const token = await getToken()
  if (token) {
    config.headers!.Authorization = `Bearer ${token}`
  }
  return config
})

export const setTokenInterceptors = (signOut: () => void) => {
  api.interceptors.response.use(
    response => {
      return response
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        signOut()
      }

      return Promise.reject(error)
    }
  )
}

api.interceptors.request.use(async function (config) {
  const token = await getToken()
  if (token) {
    config.headers!.Authorization = `Bearer ${token}`
  }
  return config
})

export { api }
