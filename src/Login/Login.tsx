import { useForm } from "react-hook-form";
import Button from "../components/Button/Button";
import { CloseIcon } from "../components/CustomIcon/CustomIcon";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input/Input";
import { useApiMutation } from "../apis/useApi";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const Login = () => {
  interface ApiResponse {
    message: string;
    token: string;
    userId: number;
  }
  const {
    mutate: signUpMutation,
    data,
    isLoading,
    isError,
  } = useApiMutation<ApiResponse, string>("login");

  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleClick = () => {
    console.log("Clicked close button");
  };
 
  const onSubmit = async(formData: any) => {
    console.log(formData, "formData");
    try {
      // Call the signUpMutation function with the form data
      await signUpMutation(JSON.stringify(formData));
    } catch (error) {
      console.error("Error during signup:", error);
      if (isError) {
        toast.update(toast.loading("Loading ..."), {
          render: "Login Failed!",
          type: "error",
          isLoading: false,
          autoClose: 2000,
          closeButton: true,
        });
      }
    }
  };

  const fetchCaptchaImage = async () => {
    try {
      const response = await fetch(
        "http://192.168.29.155:8080/generate-captcha"
      );
      if (response.ok) {
        const imageData = await response.arrayBuffer();
        const imageUrl = URL.createObjectURL(new Blob([imageData]));
        setImageSrc(imageUrl);
      } else {
        console.error("Failed to fetch captcha image");
      }
    } catch (error) {
      console.error("Error fetching captcha image:", error);
    }
  };

  useEffect(() => {
    // Fetch the captcha image when the component mounts
    fetchCaptchaImage();
  }, []);

  

  useEffect(() => {
    if (data && data.message) {
      toast.update(toast.loading("Loading ..."), {
        render:data.message,
        type: "success",
        isLoading: false,
        autoClose: 2000,
        closeButton: true,
      });
      localStorage.setItem("token", data.token);
      reset();
    } else if (isError) {
      toast.update(toast.loading("Loading ..."), {
        render: "Login Failed!",
        type: "error",
        isLoading: false,
        autoClose: 2000,
        closeButton: true,
      });
      
    }
  }, [data]);

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="m-auto bg-white p-4 login-page">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex justify-content-between">
            <h1 className="modal-title">Sign in</h1>
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
              label="Username"
              id="username"
              name="username"
              type="text"
              required={true}
              place
              placeHolder="Username"
              register={register}
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
              register={register}
            />
          </div>
          {imageSrc && (
            <>
              <div className="mb-4">
                <img src={`${imageSrc}`} alt="Captcha" />
              </div>

              <div className="mb-4">
                <Input
                  label="Captcha"
                  id="captcha"
                  name="captcha"
                  type="text"
                  required={true}
                  place
                  placeHolder="Captcha"
                  register={register}
                />
              </div>
            </>
          )}
          <div className="mb-4 d-flex justify-content-between">
            <div className="d-flex">
              <input
                type="checkbox"
                className="CustomCheckbox"
                // {...register('rememberMe')}
              />
              <div className="font-14 mx-3">Remember me</div>
            </div>
            <b className="cursor-pointer text-decoration-underline custom-blue-color">
              <Link to="/forgotPassword"> Forgot your password? </Link>
            </b>
          </div>
          <div className="d-flex gap-3">
            <Button
              onClick={onSubmit}
              styleType="primary"
              label="Sign In"
              type="submit"
              style={{ width: "100%" }}
              disable={false}
            />
            <Button
              styleType="primary"
              onClick={handleSignUp}
              label="Sign Up"
              style={{ width: "100%" }}
              disable={false}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
