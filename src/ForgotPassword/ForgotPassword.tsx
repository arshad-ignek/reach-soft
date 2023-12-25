import { useForm } from "react-hook-form";
import Button from "../components/Button/Button";
import { CloseIcon } from "../components/CustomIcon/CustomIcon";
import Input from "../components/Input/Input";
import { useApiMutation } from "../apis/useApi";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useContext, useEffect } from "react";
import ContectContext, {
  ContectContextProps,
} from "../globalContext/GlobalContext";

const ForgotPassword = () => {
  const { setContactData } = useContext(ContectContext) as ContectContextProps;
  interface ApiResponse {
    data: string;
    message: string;
  }

  const {
    mutate: forgotMutation,
    data,
    isError,
  } = useApiMutation<ApiResponse, string>("generate-otp");
  
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const handleClick = () => {
    console.log("Clicked close button");
  };
  const onSubmit = async (formData: any) => {
    console.log(formData, "formData");
    setContactData({ ...formData });
    try {
      // Call the signUpMutation function with the form data
      await forgotMutation(JSON.stringify(formData));
    } catch (error) {
      console.error("Error during signup:", error);
     
        toast.update(toast.loading("please wait ......"), {
          render: isError,
          type: "error",
          isLoading: false,
          autoClose: 2000,
          closeButton: true,
        });
      
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
      if (data?.data) {
        reset();
        console.log(data.data);
        navigate("/otp");
      }
    }
    
  }, [data]);

  return (
    <>
      <div className="m-auto bg-white p-4 login-page">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex justify-content-between">
            <h1 className="modal-title">Password</h1>
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
            <p className="small">
              Specify the email where to send the link to reset the password
            </p>
          </div>
          <div className="my-4">
            <Input
              label="Contact Number"
              id="contact"
              type="number"
              name="contact"
              required={true}
              place
              placeHolder="Contact Number"
              register={register}
            />
          </div>

          <div className="d-flex gap-3">
            <Button
              styleType="primary"
              onClick={onSubmit}
              label="Reset The Password"
              type="submit"
              style={{ width: "100%" }}
              disable={false}
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default ForgotPassword;
