import { Form, Formik } from 'formik';
import Button from '../components/Button/Button';
import { CloseIcon } from '../components/CustomIcon/CustomIcon';
import Input from '../components/Input/Input';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    };

    const handleSignUp = () => {
        navigate('/signup');
    };
    const handleClick = () => {

    }

    return (
        <>
            <div className='m-auto bg-white p-4 login-page'>
                <Formik
                    initialValues={{ email: "", createPassword: "" , confirmPassword: ""}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({errors, touched }) => (

                        <Form>
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
                                    name="email"
                                    required={true}
                                    place
                                    placeHolder="E-mail"

                                />
                                {errors.email && touched.email && (
                                    <span className="help is-danger">{errors.email}</span>
                                )}
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
                                />
                                {errors.createPassword && touched.createPassword && (
                                    <span className="help is-danger">{errors.createPassword}</span>
                                )}
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
                                />
                                {errors.confirmPassword && touched.confirmPassword && (
                                    <span className="help is-danger">{errors.confirmPassword}</span>
                                )}
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
                                    styleType="primary"
                                    type="submit"
                                    onClick={handleSignUp}
                                    label="Sign Up"
                                    style={{ width: '100%' }}
                                    disable={false}
                                />
                            </div>
                        </Form>

                    )}
                </Formik>
            </div>
        </>
    )
}

export default SignUp