import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Dropdown, Icon } from 'antd'

import { generateAvatar } from '../../utils'
import './style.scss'

const AuthInfo = props => {
  const { auth } = props
  const { firstColor, lastColor } = generateAvatar(auth.firstName, auth.lastName)
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
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
  auth: PropTypes.object
}

export default AuthInfo
