import React from 'react'
import md5 from 'md5'
import { connect } from 'react-redux'

import { Login as BaseLogin } from '../../components'
import { AuthAction } from '../../redux/actions'

const Login = props => {
  const { loading, login } = props
  const logIn = values => {
    const obj = {
      login: values.login,
      password: md5(values.password)
    }
    login(obj)
  }
  return (
    <BaseLogin handleLogin={logIn} loading={loading} />
  )
}

export default connect(({Auth}) => ({loading: Auth.isLoading}), {...AuthAction})(Login)
