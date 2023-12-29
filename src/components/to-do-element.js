import React from 'react'

const ToDoElement = (props) => {
  const { to_do_value, index } = props
  return (
    <div key={index}>{to_do_value}</div>
  )
}

export default ToDoElement