import { useForm } from 'react-hook-form';
import Button from '../components/Button/Button';
import { CloseIcon } from '../components/CustomIcon/CustomIcon';
import Input from '../components/Input/Input';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const { register, handleSubmit} = useForm();

    const handleLogin = () => {
        navigate('/login');
    };

    const onSubmit = (data: any) => {
        console.log(data);
    };
    const handleClick = () => {
        console.log("Clicked close button");
    };

    return (
        <>
            <div className='m-auto bg-white p-4 login-page'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='d-flex justify-content-between'>
                        <h1 className='modal-title'>Sign Up</h1>
                        <Button
                            styleType="secondary"
                            onClick={handleClick}
                            label={<CloseIcon />}
                            type="button"
                            style={{ background: "#F8F8F8", padding: "11px 15px" }}
                            disable={false}
                        />
                    </div>
                    <div className="my-4">
                        <Input
                            label="Email"
                            id="email"
                            type="text"
                            name="email"
                            required={true}
                            place
                            placeHolder="E-mail"
                            register={register}
                        />

                    </div>
                    <div className="mb-4">
                        <Input
                            label="CreatePassword"
                            id="createPassword"
                            name="createPassword"
                            type="password"
                            required={true}
                            place
                            placeHolder="Create Password"
                            register={register}
                        />

                    </div>
                    <div className="mb-4">
                        <Input
                            label="ConfirmPassword"
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            required={true}
                            place
                            placeHolder="Confirm Password"
                            register={register}
                        />

                    </div>

                    <div className='d-flex gap-3'>
                        <Button
                            styleType="primary"
                            onClick={handleLogin}
                            label="Sign In"
                            style={{ width: '100%' }}
                            disable={false}
                        />
                        <Button
                            onClick={onSubmit}
                            styleType="primary"
                            type="submit"
                            label="Sign Up"
                            style={{ width: '100%' }}
                            disable={false}
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUp;
