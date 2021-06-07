import axios, { AxiosRequestConfig } from 'axios'

const server =  axios.create()

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxYmY3MzEyMi1mMzc2LTQyYzktYTU4My02OWU0ZDNiN2MyYzQiLCJlcnBfbG9naW5fdXNlcl9rZXkiOiIxYmY3MzEyMi1mMzc2LTQyYzktYTU4My02OWU0ZDNiN2MyYzQiLCJleHAiOjE2MjIxMTA5NjcsImlhdCI6MTYyMjEwMDE2N30.ZpHThTDLYlZFDn5OouvxeOkp0TFaA7O0QnupNNY4UXY\n'

server.interceptors.request.use((config: AxiosRequestConfig)=> {
  config.timeout = 30000
  config.headers.Authorization = ' Bearer ' + token
  return config
})

server.interceptors.response.use(response=> {
  return response.data
})

export default server