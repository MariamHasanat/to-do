import React, { useState } from 'react'


const Form = () => {
  
    const [formData, setFormData] = useState({
        username: "",
        password: '',
        email: ''
    })

    const handleSubmit = () => {
        if (formData.username.length === 0) {
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
                <div className='form-row'>
                    <div className=' input-data'>
                        <input
                            required={true}
                            type='text'
                            name='username'
                            value={formData.username}
                            onChange={e => {
                                e.preventDefault()
                                setFormData({ ...formData, username: e.target.value })
                            }}
                        />
                        <div className="underline"></div>
                        <label>
                            UserName
                        </label>
                    </div>
                </div>
                <div className='form-row'>
                    <div className=' input-data'>
                        <input
                            required={true}
                            type='password'
                            name='password'
                            value={formData.password}
                            onChange={e => {
                                e.preventDefault()
                                setFormData({ ...formData, password: e.target.value })
                            }}
                        />
                        <div className="underline"></div>
                        <label>
                            Password
                        </label>
                    </div>
                </div>
                <div className='form-row'>
                    <div className=' input-data'>
                        <input
                            required={true}
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={e => {
                                e.preventDefault()
                                setFormData({ ...formData, email: e.target.value })
                            }}
                        />
                        <div className="underline"></div>
                        <label>
                            Email
                        </label>
                    </div>
                </div>
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