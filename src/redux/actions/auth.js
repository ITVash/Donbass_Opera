import { auth } from '../../api'

const actions = {
  isLoading: load => ({
    type: 'AUTH:IS_LOADING',
    payload: load
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

}

export default actions