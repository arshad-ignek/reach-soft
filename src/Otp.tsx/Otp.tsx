import { useForm } from "react-hook-form";
import Button from "../components/Button/Button";
import { CloseIcon } from "../components/CustomIcon/CustomIcon";
import Input from "../components/Input/Input";
import { useNavigate } from "react-router-dom";
import { useApiMutation } from "../apis/useApi";
import { useContext, useEffect } from "react";
import ContectContext, {
  ContectContextProps,
} from "../globalContext/GlobalContext";
import { toast } from "react-toastify";

const Otp = () => {
  const navigate = useNavigate();
  const { setContactData,ContactData } = useContext(ContectContext) as ContectContextProps;
  interface ApiResponse {
    data: string;
    message: string;
  }

  const {
    mutate: otpMutation,
    data,
    isError,
  } = useApiMutation<ApiResponse, string>("otp-verify");

  const { register, handleSubmit, reset,getValues } = useForm();

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
      navigate("/createPassword")
    }
  }, [data]);

  const handleClick = () => {
    console.log("Clicked close button");
  };

  return (
    <>
      <div className="m-auto bg-white p-4 login-page">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex justify-content-between">
            <h1 className="modal-title">OTP</h1>
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

          <div className="d-flex gap-3">
            <Button
              onClick={onSubmit}
              styleType="primary"
              type="submit"
              label="Confirm OTP"
              style={{ width: "100%" }}
              disable={false}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Otp;
