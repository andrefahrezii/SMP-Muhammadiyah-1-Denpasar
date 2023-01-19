import React from "react";


// Components
const Home = React.lazy(() => import("./views/home"));
const Register = React.lazy(() => import("./views/register"));


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
    }
];

export default routes;
