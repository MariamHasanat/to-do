import React from 'react'

const Input = (props) => {
    const { label, value, type, formData, name, setFormData,required } = props
    return (
        <div className='form-row'>
            <div className=' input-data'>
                <input
                    required={required}
                    type={type}
                    name={name}
                    value={value}
                    onChange={e => {
                        e.preventDefault()
                        setFormData({ ...formData, [name]: e.target.value })
                    }}
                />
                <div className="underline"></div>
                <label>
                    {label}
                </label>
            </div>
        </div>
    )
}

export default Input