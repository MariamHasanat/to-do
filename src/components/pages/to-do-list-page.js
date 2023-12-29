import React, { useEffect, useState } from 'react'
import ToDoInput from '../to-do-input'
import ToDoElement from '../to-do-element'
import './to-do-page/todo.css'

const ToDoList = () => {

  const [array, setArray] = useState([])

  useEffect(() => {
    console.log(array);
  }, [array])

  return (
    <div className='body'>
      <div className="container1">
        <div className="todo-app">
          <div className="app-title">
            <h2>To-do app</h2>
            <i className="fa-solid fa-book-bookmark"></i>
          </div>
          <ToDoInput array={array} setArray={setArray} />
          <ul id="list-container">
            {
              array.map((value, index) => (
                <ul key={index}>
                  <ToDoElement to_do_value={value} index={index} array={array} setArray={setArray} />
                </ul>
              )
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ToDoList