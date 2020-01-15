import { notification } from '../../api'

const actions = {
  sendMessages: async data => {
    const send = await notification.send(data)
    try {
      console.log('Сообщения успешно доставлены!', send)
    } catch (err) {
      console.error(`Ошибка при отправке запросса!!!`, err)
    }
  }
}

export default actions