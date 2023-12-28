import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from './button';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='text'>
                Hello
            </div>
            <br />
            <form>
                <Button label='form page' handleSubmit={onclick => navigate('/form')} />
            </form>
        </div>
    )
}

export default Home