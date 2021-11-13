import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.1.81:3333'
})

export const setUserToken = (token: string) => {
  api.interceptors.request.use(function (config) {
    config.headers!.Authorization = `Bearer ${token}`
    return config
  })
  api.interceptors.response.use(
    response => {
      return response
    },
    async function (error) {
      const originalRequest = error.config
      if (error.response.status === 403 && !originalRequest._retry) {
      }
      return Promise.reject(error)
    }
  )
}
