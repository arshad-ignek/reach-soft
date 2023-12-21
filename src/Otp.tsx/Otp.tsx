import { useForm } from 'react-hook-form';
import Button from '../components/Button/Button';
import { CloseIcon } from '../components/CustomIcon/CustomIcon';
import Input from '../components/Input/Input';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
    const navigate = useNavigate();
    const { register, handleSubmit} = useForm();

    const onSubmit = (data: any) => {
        navigate('/createPassword');
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
                        <h1 className='modal-title'>OTP</h1>
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
                            label="OTP"
                            id="otp"
                            type="number"
                            name="otp"
                            required={true}
                            place
                            placeHolder="OTP"
                            register={register}
                        />
                    </div>
                  
                    <div className='d-flex gap-3'>
                    
                        <Button
                            onClick={onSubmit}
                            styleType="primary"
                            type="submit"
                            label="Confirm OTP"
                            style={{ width: '100%' }}
                            disable={false}
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Otp;
