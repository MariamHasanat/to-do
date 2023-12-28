import React, { useState } from 'react'


const Form = () => {
    // eslint-disable-next-line
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: ""
    })

    const handleSubmit = () => {
        console.log("form Data", formData);

        setFormData({
            username: "",
            password: "",
            email: ""
        })
    }

    return (
        <div>
            <form>  
                {/* onSubmit={handleSubmit} */}
                <label>
                    UserName
                    <input type='text'
                        name='username'
                        value={formData.username}
                        onChange={e => {
                            e.preventDefault()
                            setFormData({ ...formData, username: e.target.value })
                        }}
                    />
                </label>
                <label>
                    Password
                    <input type='password'
                        name='password'
                        value={formData.password}
                        onChange={e => {
                            e.preventDefault()
                            setFormData({ ...formData, password: e.target.value })
                        }}
                    />
                </label>
                <label>
                    Email
                    <input type='email'
                        name='email'
                        value={formData.email}
                        onChange={e => {
                            e.preventDefault()
                            setFormData({ ...formData, email: e.target.value })
                        }}
                    />
                </label>
                <button
                    onClick={e => {
                        e.preventDefault()
                        handleSubmit()
                    }}
                >Submit Data</button>
            </form>
        </div>
    )
}

export default Form