import { useState } from 'react'
import { Form } from 'antd'

import { Register } from '../../components'
//const [confirmDirty, setConfirmDirty] = useState()
export default Form.create({
  validateToNextPassword: (rule, value, callback, props, confirmDirty) => {
    const { form } = props
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  },
  compareToFirstPassword: (rule, value, callback, props) => {
    const { form } = props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Оба пароля не совпадают');
    } else {
      callback();
    }
  },
  handleConfirmBlur: (e, confirmDirty, setConfirmDirty) => {
    const { value } = e.target;
    setConfirmDirty({ confirmDirty: confirmDirty || !!value });
  }

})(Register)