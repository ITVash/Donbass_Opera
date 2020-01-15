import React from 'react'
import PropTypes from 'prop-types'
import { Table as BaseTable } from 'antd'

import './style.scss'
const dayIsMonth = () => {
  const d = new Date()
  return 33 - new Date(d.getFullYear(), d.getMonth(), 33).getDate()
}
const dayMonth = new Date()
const Table = props => {
  
  const days = dayIsMonth()
  const { tableUser } = props
  const day = () => {
    const obj = []
    for (let index = 0; index < days; index++) {
      obj.push({
        title: index + 1,
        dataIndex: index + 1,
        key: index + 1,
        width: 50
      })
    }
    return obj
  }
  const toDay = day()
  console.log('toDay', toDay)
  const column = [
		{
			title: "ФИО",
			dataIndex: "FL",
			key: "FL",
			width: 170,
      fixed: "left",
      align: 'center'
    },
    {
      title: `График за ${dayMonth}`,
      children: toDay
    }
  ]
  const data = []
  for (let i = 0; i < 18; i++) {
    data.push({
      key: i + 1,
      FL: `Полищук Иван ${i}`,
      1: `B`,
      2: `10`,
      10: `11`
    })
  }
  return (
    <div>
      <BaseTable columns={column}
        dataSource={data}
        bordered
        scroll={{ x: 'calc(700px + 50%)', y: 'calc(100vh - 270px)' }}
      />
      {tableUser}
    </div>
  )
}

Table.propTypes = {
  tableUser: PropTypes.object
}

export default Table
