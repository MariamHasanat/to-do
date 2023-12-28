import React, { useState } from 'react'
import Input from './input'
import Button from './button'


const Form = () => {

    const [required] = useState(true)
    const [formData, setFormData] = useState({
        username: "",
        password: '',
        email: ''
    })

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
                <Button
                    formData={formData}
                    required={required}
                    setFormData={setFormData}
                    label='Submit'
                />
            </form>
        </div>
    )
}

export default Form