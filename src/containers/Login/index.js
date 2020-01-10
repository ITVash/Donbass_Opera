import React from 'react'
import md5 from 'md5'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Login as BaseLogin } from '../../components'
import { AuthAction } from '../../redux/actions'

const Login = props => {
  const history = useHistory()
  const { loading, login } = props
  const logIn = async values => {
    const obj = {
      login: values.login,
      password: md5(values.password)
    }
    const res = await login(obj)
    if (res) history.push('/')
  }
  return (
    <BaseLogin handleLogin={logIn} loading={loading} />
  )
}

export default connect(({Auth}) => ({loading: Auth.isLoading}), {...AuthAction})(Login)
