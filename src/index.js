import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { BrowserRouter as Router } from 'react-router-dom'
import 'antd/dist/antd.css'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { subscribeUser } from './subscribe'

import store from './redux/store'
import { AuthAction } from './redux/actions'
window.store = store

/*Date.prototype.dayIsMonth = () => {
  return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate()
}*/

const token = localStorage.getItem('token')
if (token) {
  const dec = jwtDecode(token)
  if (dec.exp * 1000 > Date.now()) {
    const data = dec.user[0]
    const obj = {
      login: data.login,
      firstName: data.firstName,
      lastName: data.lastName,
      access: data.access,
      smena: data.smena
    }
    store.dispatch(AuthAction._login(obj))
  } else {
    //localStorage.removeItem('token')
    store.dispatch(AuthAction.logout())
  }
}

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'))


serviceWorker.register()
subscribeUser()
