import React, { useEffect, useState } from 'react'
import ToDoInput from '../to-do-input'
// import ToDoElement from './to-do-element'

// array typeof [];
const ToDoList = (props) => {

  const [array, setArray] = useState([])

  useEffect(() => {
    console.log(array);
  }, [array])

  return (
    <div>
      <ToDoInput array={array} setArray={setArray}/>
      
      {/* {array.map(element => <ToDoElement value={element.value} key={element.key}/> )} */}
    </div>
  )
}

export default ToDoList