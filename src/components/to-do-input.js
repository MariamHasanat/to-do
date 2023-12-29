import React, { useState } from 'react'

const ToDoInput = (props) => {
    const { array, setArray } = props
    const [to_do_value, setToDoValue] = useState('');

    return (
        <div>
            <input type='text'
                name='to_do_input'
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
            }}>Add Element</button>
        </div>
    )
}

export default ToDoInput