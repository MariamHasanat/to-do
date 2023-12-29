import React from 'react'
import './pages/to-do-page/todo.css'

const ToDoElement = (props) => {
  const { to_do_value, index, array, setArray } = props
  return (
    <li
      onClick={(e) => {
        if (e.target.tagName === "LI") {
          e.target.classList.toggle("checked");
        } else if (e.target.tagName === "SPAN") {
          e.target.parentElement.remove();
        }
      }}
      key={index} id="list-container">
      {to_do_value}
      <span
        onClick={() => {
          array.splice(index, 1)
          setArray([...array])
          console.log(array);
        }}
      >
        x
      </span>
    </li>
  )
}

export default ToDoElement