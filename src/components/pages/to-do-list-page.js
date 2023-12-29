import React, { useEffect, useState } from 'react'
import ToDoInput from '../to-do-input'
import ToDoElement from '../to-do-element'
// import ToDoElement from './to-do-element'

// array typeof [];
const ToDoList = () => {

  const [array, setArray] = useState([])

  useEffect(() => {
    console.log(array);
  }, [array])

  return (
    <div>
      <ToDoInput array={array} setArray={setArray} />
      {
        array.map((value, index) => (
          <div key={index}>
            <ToDoElement to_do_value={value} index={index} array={array} setArray={setArray} />
          </div>
        )
        )
      }
    </div>
  )
}

export default ToDoList