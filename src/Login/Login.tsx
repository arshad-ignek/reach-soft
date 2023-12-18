import Button from '../components/Button/Button';
import { CloseIcon } from '../components/CustomIcon/CustomIcon';
import Input from '../components/Input/Input';


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
            <div className='m-auto bg-white p-4 login-page'>
                <form>
                    <div className='d-flex justify-content-between'>
                        <h1 className='modal-title'>Sign in</h1>


                        <Button
                            styleType="secondary"
                            onClick={handleClick}
                            label={<CloseIcon />}
                            type="button"
                            style={{ background: "#F8F8F8", padding: "11px 15px" }}
                            disable={false}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        />
                    </div>
                    <div className="my-4">
                        <Input
                            label="Username"
                            id="username"
                            name="username"
                            required={true}
                            place
                            placeHolder="E-mail"
                            props
                        />
                    </div>
                    <div className="mb-4">
                        <Input
                            label="Password"
                            id="password"
                            name="password"
                            type="password"
                            required={true}
                            place
                            placeHolder="Password"
                            props
                        />
                    </div>
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
                </form>
            </div>
        </>
    )
}

export default Login