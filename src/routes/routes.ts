import Login from "../Login/Login";

const routes:{path: string, component:()=> JSX.Element} [] = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: Login
    }
];

export default routes;