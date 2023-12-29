import React, { useState } from 'react'
import './todo.css'

const ToDoInput = (props) => {
    const { array, setArray } = props
    const [to_do_value, setToDoValue] = useState('');

    return (
        <div className="row">
            <input type='text'
                id="input-box" placeholder="add your tasks"
                //name='to_do_input'
                value={to_do_value}
                onChange={(e) => {
                    e.preventDefault()
                    setToDoValue(e.target.value)
                }}
            >
            </input>
            <button onClick={e => {
                e.preventDefault()
                setArray([to_do_value, ...array])
                setToDoValue('')
            }}>Add</button>
        </div>
        // <div className="row">
        //     <input type="text" id="input-box" placeholder="add your tasks" />
        //     <button>Add</button>
        // </div>
    )
}

export default ToDoInput