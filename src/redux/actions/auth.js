import { auth } from '../../api'

const actions = {
  isLoading: load => ({
    type: 'AUTH:IS_LOADING',
    payload: load
  }),
  _login: data => ({
    type: 'AUTH:LOGIN',
    payload: data
  }),
  _logout: () => ({
    type: 'AUTH:LOGOUT',
  }),
  logout: () => async dispatch => {
    await dispatch(actions.isLoading(true))
    localStorage.removeItem('token')
    await dispatch(actions._logout())
    try {
      await dispatch(actions.isLoading(false))
    } catch (err) {
      console.error(`Ошибка при выходе!`, err)
    }
  },
  register: data => async dispatch => {
    await dispatch(actions.isLoading(true))
    try {
      const reg = await auth.register(data)
      await dispatch(actions.isLoading(false))
      console.log('Ответ от сервера', reg)
      return true
    } catch (err) {
      console.error(`Что-то пошло не так: ${err}`)
      return false
    }
  },
  login: data => async dispatch => {
    await dispatch(actions.isLoading(true))
    try {
      const login = await auth.login(data)
      const log = await login.data
      const obj = {
        login: log.login,
        firstName: log.firstName,
        lastName: log.lastName,
        access: log.access,
        smena: log.smena
      }
      localStorage.setItem('token', log.token)
      await dispatch(actions._login(obj))
      await dispatch(actions.isLoading(false))
      return true
    } catch (err) {
      await dispatch(actions.isLoading(false))
      console.error(`Ошибка запросов ${err}`)
      return false
    }
  },

}

export default actions