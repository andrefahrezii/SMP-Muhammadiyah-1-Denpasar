import React from "react";


// Components
const Home = React.lazy(() => import("./views/home"));
const Register = React.lazy(() => import("./views/register"));
const Login = React.lazy(() => import("./views/login"));
const Result = React.lazy(() => import("./views/result"));


const routes = [
    {
        name: "root",
        path: "/",
        element: <Home />
    },
    {
        name: "root",
        path: "/register",
        element: <Register />
    },
    {
        name: "root",
        path: "/login",
        element: <Login />
    },
    {
        name: "root",
        path: "/result",
        element: <Result />
    }
];

export default routes;
