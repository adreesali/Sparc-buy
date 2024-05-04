// import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import Home from "../pages/Home";
// import Login from "../pages/Login";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />
//     },
//     {
//         path: "",
//         element: <Home />
//     },
//     {
//         path: "/login",
//         element: <Login />
//     }
// ])


// export default router;


import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "sign-up",
                element: <Signup />,
            },
        ],
    },
]);

export default router;
