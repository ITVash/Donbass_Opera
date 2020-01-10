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
  register: data => async dispatch => {
    await dispatch(actions.isLoading(true))
    const reg = await auth.register(data)
    try {
      await dispatch(actions.isLoading(false))
      console.log('Ответ от сервера', reg)
    } catch (err) {
      console.error(`Что-то пошло не так: ${err}`)
    }
  },
  login: data => async dispatch => {
    await dispatch(actions.isLoading(true))
    const login = await auth.login(data)
    try {
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
    } catch (err) {
      console.error(`Ошибка запросов ${err}`)
    }
  },

}

export default actions