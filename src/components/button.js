import React from 'react'

const Button = (props) => {

    const { formData, required, setFormData, label } = props
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