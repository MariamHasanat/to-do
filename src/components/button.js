import React from 'react'

const Button = (props) => {

    const { label, handleSubmit } = props

    return (
        <div className="form-row submit-btn">
            <div className="input-data">
                <div className="inner"></div>
                <button
                    type='submit'
                    value='Submit'
                    onClick={e => {
                        e.preventDefault()
                        handleSubmit()
                    }}
                >{label}
                </button>
            </div>
        </div>
    )
}

export default Button