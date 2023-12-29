import React from 'react'
import Button from './button'

const ToDoElement = (props) => {
  const { to_do_value, index, array, setArray } = props
  return (
    <div key={index}>
      <span>
        {to_do_value}
      </span>
      <div className='home-button'>
      <Button label="delete" handleSubmit={() => {
        array.splice(index,1)
        setArray([...array])
        console.log(array);
      }} />
      </div>
    </div>
  )
}

export default ToDoElement