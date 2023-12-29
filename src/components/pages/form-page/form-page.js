import React, { useState } from 'react'
import Input from '../../input'
import Button from '../../button'
import './form.css'
// import { useNavigate } from "react-router-dom";

const Form = () => {
    // const navigate = useNavigate();
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
            alert("Submitted Successfully 🔥")
            setFormData({
                username: "",
                password: "",
                email: ""
            })
        }
    }

    return (
        <div className="container">
            <div className='text'>Mariam Hasanat Form</div>
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
                <Button
                    formData={formData}
                    required={required}
                    setFormData={setFormData}
                    label='Submit'
                    handleSubmit={handleSubmit}
                />
            </form>
        </div>
    )
}

export default Form