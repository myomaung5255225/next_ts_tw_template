import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { Store } from 'redux'
import { b2bConfig } from '../Config'

export const AxiosInstnace = Axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
})

export const setupInspector = (store: Store) => {
  AxiosInstnace.interceptors.request.use((config: AxiosRequestConfig<any>) => {
    document.body.classList.add('loading-indicator')
    const accessToken = sessionStorage.getItem('accessToken')
    if (accessToken) {
      if (config.headers) {
        config.headers['Authorization'] = `JST ${accessToken}`
      }
      return config;
    }
   
  },(error:AxiosError)=>{
    return Promise.reject(error)
  })
  const {dispatch} = store;
  AxiosInstnace.interceptors.response.use(async(res:AxiosResponse)=>{
      const profileUrl =`${b2bConfig.apiPath.bzEntry}/user/profile`
      const host = res.config.url;
      if(host===profileUrl){
          
      }
      document.body.classList.remove('loading-indicator');
  })
}
