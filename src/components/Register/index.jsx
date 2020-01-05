import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  Form,
  Input,
  Tooltip,
  Icon,
  Button,
} from 'antd';

import './style.scss'

const Register = props => {
  const { getFieldDecorator } = props.form
  const [confirmDirty, setConfirmDirty] = useState()
  const { handleClick, validateToNextPassword, compareToFirstPassword, handleConfirmBlur } = props
  /*const validateToNextPassword = (rule, value, callback) => {
    const { form } = props
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }
  const compareToFirstPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Оба пароля не совпадают');
    } else {
      callback();
    }
  }
  const handleConfirmBlur = e => {
    const { value } = e.target;
    setConfirmDirty({ confirmDirty: confirmDirty || !!value });
  }*/

  return (
    <div className="register">
      <h3>Регистрация пользователя</h3>
      <Form onSubmit={handleClick}>
        <Form.Item label={
          <span>
            Логин&nbsp;
            <Tooltip title="Логин необходим для входа в приложение">
              <Icon type="info-circle" />
            </Tooltip>
          </span>  
        }>
          {getFieldDecorator('login', {
            rules: [
              {
                //type: 'text',
                message: 'Логин обязателен для заполнения',
              },
              {
                required: true,
                message: 'Введите логин',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              Имя&nbsp;
              <Tooltip title="Укажите Ваше реальное имя">
                <Icon type="info-circle" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('firstName', {
            rules: [{ required: true, message: 'Укажите свое имя!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              Фамилия&nbsp;
              <Tooltip title="Укажите Вашу реальную фамилию">
                <Icon type="info-circle" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('lastName', {
            rules: [{ required: true, message: 'Укажите свою фамилию!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              Телефон&nbsp;
              <Tooltip title="Укажите свой телефон в формате +380719876543">
                <Icon type="info-circle" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Укажите Ваш телефон!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Пароль" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Введите пароль!',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Подтвердите пароль" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Подтвердите пароль!',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit" block>
            Регистрация
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

Register.propTypes = {
  handleClick: PropTypes.func
}

export default Form.create({ name: 'register' })(Register)
