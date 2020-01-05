import { auth } from '../../api'

const actions = {
  register: async data => {
    const reg = await auth.register(data)
    const regObj = await reg.json()
    try {
      console.log('regObj', regObj)
      console.log('Ответ от сервера', reg)
    } catch (err) {
      console.error(`Что-то пошло не так: ${err}`)
    }
  },

}

export default actions