import React, { useState } from 'react'
import Input from './input'


const Form = () => {

    const [required] = useState(true)
    const [formData, setFormData] = useState({
        username: "",
        password: '',
        email: ''
    })

    const handleSubmit = () => {
        if (required && formData.username.length === 0) {
            alert("\nPlease Enter a Valid User Name")
        }
        else if (formData.password.length === 0) {
            alert("\nPlease Enter a Valid Password ")
        } else if (formData.email.length === 0) {
            alert("\nPlease Enter a Valid Email")
        } else {
            console.log("form Data", formData);
            setFormData({
                username: "",
                password: "",
                email: ""
            })
        }
    }

    return (
        <div>
            <form>
                <Input
                    label='UserName'
                    value={formData.username}
                    setFormData={setFormData}
                    name='username'
                    type='text'
                    formData={formData}
                    required={required}
                />
                <Input
                    label='Password'
                    value={formData.password}
                    setFormData={setFormData}
                    name='password'
                    type='password'
                    formData={formData}
                    required={required}
                />
                <Input
                    label='Email'
                    value={formData.email}
                    setFormData={setFormData}
                    name='email'
                    type='email'
                    formData={formData}
                    required={required}
                />
                <br />
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
                        >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form