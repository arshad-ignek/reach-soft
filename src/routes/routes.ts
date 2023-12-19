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
    }
];

export default routes;