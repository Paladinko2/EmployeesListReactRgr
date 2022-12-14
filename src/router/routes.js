import Login from "../pages/Login";
import Characters from "../pages/Characters";

export const privateRoutes = [
    {path: "/characters", element: <Characters/>}
]

export const publicRoutes = [
    {path: "/login", element: <Login/>}
]