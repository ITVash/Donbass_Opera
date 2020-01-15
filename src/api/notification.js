import { axios } from '../core'

export default {
  send: data => axios.post(`notifications/send`, data)
}