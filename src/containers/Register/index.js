import React from 'react'
import md5 from 'md5'
import { connect } from 'react-redux'

import { AuthAction } from '../../redux/actions'
import { Register as BaseRegister } from '../../components'

const Register = props => {
  const { loading, register } = props
  const click = e => {
    const form = e
    const obj = {
      login: form.login,
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
      password: md5(form.password),
      access: 1,
      smena: 0
    }
    register(obj)
  }
  return <BaseRegister handleClick={click} loading={loading} />
}

export default connect(({Auth})=>({loading: Auth.isLoading}), {...AuthAction})(Register)