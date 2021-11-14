import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.1.81:3333'
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

export { api }
