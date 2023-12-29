import React from 'react'

const ToDoElement = (props) => {
    const {to_do_value} = props
  return (
    <div>
        {/* <input type='checkbox'/> */}
        <span>{to_do_value}</span>
    </div>
  )
}

export default ToDoElement