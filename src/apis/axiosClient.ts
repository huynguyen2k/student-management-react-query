import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 60 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

axiosClient.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)
