import React from 'react'
import { Spin, Icon } from 'antd'

import './style.scss'

const Loading = () => {
  const icon = <Icon type="loading" style={{fontSize: 24}} spin />
  return (
    <div className="loading">
      <div className="loading__body">
        <Spin indicator={icon} tip="Загрузка..." />
      </div>
    </div>
  )
}

export default Loading
