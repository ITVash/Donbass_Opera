import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Dropdown, Icon, Button } from 'antd'

import { generateAvatar } from '../../utils'
import './style.scss'

const AuthInfo = props => {
  const { auth, sendMessages, logout } = props
  const { firstColor, lastColor } = generateAvatar(auth.firstName, auth.lastName)
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">Профиль</a>
			</Menu.Item>
			<Menu.Divider />
			{auth.access >= 5 && 
				<Menu.Item key="1">
					<Button type='link'>Управление персоналом</Button>
				</Menu.Item>}
      <Menu.Item key="2">
				<Button type='link' onClick={() => {
					const obj = {
						title: 'Новое уведомление',
						body: 'Внесены изменения в графике работы'
					}
					sendMessages(obj)
				}}>Отправить уведомление</Button>
      </Menu.Item>
      <Menu.Divider />
			<Menu.Item key="3">
				<Button type='link' onClick={()=>{logout()}}>Выйти</Button>
			</Menu.Item>
    </Menu>
  )
  return (
		<>
			<div
				className='header__avatar'
				style={{
					background: `linear-gradient(135deg, ${firstColor} 0%, ${lastColor} 96%)`,
				}}>
				{auth.firstName.substr(0, 1)}
				{auth.lastName.substr(0, 1)}
			</div>
			<div className='header__name'>
				<Dropdown overlay={menu} trigger={["click"]}>
					<span className='ant-dropdown-link'>
						{auth.lastName}. {auth.firstName.substr(0, 1)} <Icon type="down" />
					</span>
				</Dropdown>
			</div>
		</>
	);
}

AuthInfo.propTypes = {
	auth: PropTypes.object,
	sendMessages: PropTypes.func,
	logout: PropTypes.func
}

export default AuthInfo
