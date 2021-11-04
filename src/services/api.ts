import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.1.81:3333'
})

export const setClientToken = (token: string) => {
  api.interceptors.request.use(function (config) {
    config.headers!.Authorization = `Bearer ${token}`
    return config
  })
}
