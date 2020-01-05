import { axios } from '../core'

export default {
  register: data => axios.post('auth', data),
  login: data => axios.post('getMe',data)
}