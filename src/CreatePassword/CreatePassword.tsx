import { toast } from 'react-toastify';
import { useApiMutation } from '../apis/useApi';
import Button from '../components/Button/Button';
import { CloseIcon } from '../components/CustomIcon/CustomIcon';
import Input from '../components/Input/Input';
import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import ContectContext, { ContectContextProps } from '../globalContext/GlobalContext';


const CreatePassword = () => {
    const { ContactData } = useContext(ContectContext) as ContectContextProps;

    interface ApiResponse {
        data: string;
        message: string;
      }
    
      const {
        mutate: otpMutation,
        data,
        isError,
      } = useApiMutation<ApiResponse, string>("forgot-password");
    
      const { register, handleSubmit, watch,reset, formState: { errors } ,getValues} = useForm();
    
      const onSubmit = async () => {
        const formData = getValues();
        const combinedData = { ...ContactData, ...formData };
        console.log(combinedData);
        try {
          // Call the signUpMutation function with the form data
          await otpMutation(JSON.stringify(combinedData));
        } catch (error) {
          console.error("Error during signup:", error);
          if (isError) {
            toast.update(toast.loading("please wait ......"), {
              render: isError,
              type: "error",
              isLoading: false,
              autoClose: 2000,
              closeButton: true,
            });
          }
        }
      };
    
      useEffect(() => {
        // Check if there is an error in the response
        if (data) {
          // Check the data and perform actions accordingly
          toast.update(toast.loading("please wait ......"), {
            render: data.message,
            type: "success",
            isLoading: false,
            autoClose: 2000,
            closeButton: true,
          });
          console.log(data);
    
          reset();
        }
      }, [data]);
    const handleClick = () => {
        console.log("Clicked close button");
    }
 

    return (
        <>
            <div className='m-auto bg-white p-4 login-page'>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='d-flex justify-content-between'>
                        <h1 className='modal-title'>Create New Password</h1>
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
                            id="newPassword"
                            name="newPassword"
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
                            id="reEnterPassword"
                            name="reEnterPassword"
                            register={register}
                            type="password"
                            required={true}
                            password={watch("newPassword", "")}
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