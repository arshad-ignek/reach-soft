import { Form, Formik } from 'formik';
import Button from '../components/Button/Button';
import { CloseIcon } from '../components/CustomIcon/CustomIcon';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input/Input';
import { useForm } from 'react-hook-form';
import { error } from 'console';


const CreatePassword = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState:{errors} } = useForm();
   
    const handleClick = () => {
        console.log("Clicked close button");
    }
    const onSubmit = (data: any) => {
        console.log(data);
    };
  

    return (
        <>
            <div className='m-auto bg-white p-4 login-page'>
               
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='d-flex justify-content-between'>
                                <h1 className='modal-title'>Create Password</h1>
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
                                    label="Password"
                                    id="password"
                                    name="password"
                                    type="password"
                                    register={register}
                                    required={true}
                                    place
                                    placeHolder="Password"

                                />
                               
                            </div>
                            <div className="mb-4">
                                <Input
                                    label="Confirm Password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    register={register}
                                    type="password"
                                    required={true}
                                    // validate={true}
                                    password={watch("password", "")}
                                    place
                                    placeHolder="Confirm Password"
                                />
                             {errors.confirmPassword && <p>Passwords must match</p>}
                            </div>
                           
                            <div className='d-flex gap-3'>
                                <Button
                                    styleType="primary"
                                    onClick={onSubmit}
                                    label="Create Password"
                                    type="submit"
                                    style={{ width: '100%' }}
                                    disable={false}
                                />
                               
                            </div>
                        </form>

            </div>
        </>
    )
}

export default CreatePassword