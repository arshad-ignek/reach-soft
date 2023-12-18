import React from 'react'
import Button from '../components/Button/Button';

const Login = () => {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    const handleMouseOver = () => {
        console.log('Mouse over button!');
    };

    const handleMouseOut = () => {
        console.log('Mouse out button!');
    };
    return (
        <>
            <div className='login-page'>
                <h1 className='modal-title'>Sign in</h1>
                <Button 
                 styleType="secondary"  
                 onClick={handleClick}
                 label="X"
                 type="button"
                 style={{ background:"#F8F8F8" }}
                 disable={false}
                 onMouseOver={handleMouseOver}
                 onMouseOut={handleMouseOut}
                />
                <Button
                    styleType="primary"
                    onClick={handleClick}
                    label="Sign in"
                    type="button"
                    style={{ width: '100%' }}
                    disable={false}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
            </div>
        </>
    )
}

export default Login