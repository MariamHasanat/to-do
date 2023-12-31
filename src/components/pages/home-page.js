import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from '../button';
import './form-page/form.css'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className='text'>
                Hello
            </div>
            <br />
            <div className='home-button'>
                <Button label='form page' handleSubmit={() => navigate('/form')} />
            </div>
            <div className='home-button'>
                <Button label='to-do list page' handleSubmit={() => navigate('/to-do')} />
            </div>
        </div>
    )
}

export default Home