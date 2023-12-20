import { useForm } from "react-hook-form";
import Button from "../components/Button/Button";
import { CloseIcon } from "../components/CustomIcon/CustomIcon";
import Input from "../components/Input/Input";

const ForgotPassword = ()=>{
    const { register, handleSubmit } = useForm();
    const handleClick = () => {
        console.log("Clicked close button");
        
       };
    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <>
            <div className='m-auto bg-white p-4 login-page'>
              
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='d-flex justify-content-between'>
                                <h1 className='modal-title'>Password</h1>
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
                              <p className="small">Specify the email where to send the link to reset the password</p>
                            </div>
                            <div className="my-4">
                                <Input
                                    label="Email"
                                    id="email"
                                    type="email"
                                    name="email"
                                    required={true}
                                    place
                                    placeHolder="E-mail"
                                    register={register}
                                />
                               
                            </div>
                           
                            <div className='d-flex gap-3'>
                                <Button
                                    styleType="primary"
                                    onClick={()=>{}}
                                    label="Reset The Password"
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
export default ForgotPassword