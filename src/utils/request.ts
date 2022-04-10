/**
 * 请求模块
 */

import axios, {
  AxiosRequestConfig
} from 'axios'

import { VUE_APP_BASE_URL } from '@/settings'

// 创建 axios 请求实例
const request = axios.create({
  baseURL: VUE_APP_BASE_URL
})

// 请求拦截器
request.interceptors.request.use(config => {
  return config
}, err => Promise.reject(err))

// 响应拦截器
request.interceptors.response.use(resp => {
  return resp
}, err => Promise.resolve(err))

// 默认导出 请求函数
export default ({
  method = 'GET',
  url,
  headers,
  params,
  data
}: AxiosRequestConfig) => {
  return request({
    method,
    url,
    headers,
    params,
    data
  })
}
