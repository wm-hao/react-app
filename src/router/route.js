import Login from "../work/Login";
import NotFound from "../work/NotFound";
import SignUp from "../work/SignUp";
import Forgot from "../work/Forgot";
import Dashboard from "../templates/dashboard/Dashboard";

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
        component: Dashboard,
        exact: true
    },
    // 此处放最后，NOT FOUND
    {
        component: NotFound,
    }
];

export default routes;
