import React from 'react'
import PropTypes from 'prop-types'

import { Login, Register } from '../../containers'
const Auth = props => {
  const { register, login } = props
  
  return (
    <>
      {register && <Register />}
      {login && <Login />}
    </>
  )
}

Auth.propTypes = {
  register: PropTypes.bool,
  login: PropTypes.bool
}

export default Auth
