import CreatePassword from "../CreatePassword/CreatePassword";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

const routes:{path: string, component:()=> JSX.Element} [] = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: SignUp
    },
    {
        path: '/forgotPassword',
        component: ForgotPassword
    },
    {
        path: '/createPassword',
        component: CreatePassword
    }
];

export default routes;