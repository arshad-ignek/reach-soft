import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CloseIcon } from "../CustomIcon/CustomIcon";

interface CustomCloseButtonProps {
  closeToast: any;
}


const ToastContainerWrapper: React.FC = () => {
  const CustomCloseButton: React.FC<CustomCloseButtonProps> = ({ closeToast }) => (
    <i className="material-icons cursor-pointer m-auto" onClick={closeToast}>
      <CloseIcon />
    </i>
  );
  return (
    <>
     <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{borderRadius:"16px",padding:"12px"}}
        closeButton={CustomCloseButton}
        toastClassName='CustomToast'
      />
     
    </>
  );
};

export default ToastContainerWrapper;