import Login from "../work/Login";
import NotFound from "../work/NotFound";
import SignUp from "../work/SignUp";
import Forgot from "../work/Forgot";
import Home from "../work/pages/home/Home";
import Index from "../work/pages/home/Index";

const routes = [
    {
        path: '/',
        component: Login,
        exact: true
    },
    {
        path: '/login',
        component: Login,
        exact: true
    },
    {
        path: '/sign',
        component: SignUp,
        exact: true
    },
    {
        path: '/forgot',
        component: Forgot,
        exact: true
    },
    {
        path: '/home',
        component: Home,
        exact: true,
        routes: [
            {
                path: '/home',
                exact: true,
                component: Index
            }
        ]
    },
    // 此处放最后，NOT FOUND
    // {
    //     component: NotFound,
    // }
];

export default routes;
