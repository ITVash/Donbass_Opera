import React from 'react'
import PropTypes from 'prop-types'
import { Form, Icon, Input, Button } from 'antd'

import Loading from '../Loading'

import './style.scss'

const Login = props => {
  const { handleLogin, loading } = props
  const { getFieldDecorator } = props.form
  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        handleLogin(values)
      }
    })
  }
  return (
    <>
      {loading && <Loading />}
			<Form onSubmit={handleSubmit} className='login-form login'>
				<Form.Item>
					{getFieldDecorator("login", {
						rules: [{ required: true, message: "Введите Логин!" }],
					})(
						<Input
							prefix={<Icon type='user' style={{ color: "rgba(0,0,0,.25)" }} />}
							placeholder='Логин'
						/>,
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator("password", {
						rules: [{ required: true, message: "Введите пароль!" }],
					})(
						<Input
							prefix={<Icon type='lock' style={{ color: "rgba(0,0,0,.25)" }} />}
							type='password'
							placeholder='Пароль'
						/>,
					)}
				</Form.Item>
				<Form.Item>
					<Button
						type='primary'
						htmlType='submit'
						className='login-form-button'
						block>
						Войти
					</Button>
					<span>
						или <span>Зарегистрироваться</span>
					</span>
				</Form.Item>
			</Form>
		</>
	);
}

Login.propTypes = {
  handleLogin: PropTypes.func,
  loading: PropTypes.bool
}

export default Form.create({ name: 'login' })(Login)
