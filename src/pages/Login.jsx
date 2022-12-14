import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../components/LoginForm/LoginForm";
import { AuthContext } from "../context";
import { accounts } from "../data/accounts";
import { setCurUserAction } from "../redux/actions/LoginActions";

const Login = () => {

    const dispatch = useDispatch();

    const [credentials, setCredentials] = useState({email: "", password: ""});
    const [loginMessage, setLoginMessage] = useState(<p style={{marginLeft:"50px", marginBottom:"-10px"}}>Enter your email and password</p>);
    const {setIsAuth} = useContext(AuthContext);

    const onLoginSubmit = (event) => {
        event.preventDefault();

        if (accounts.find(account => account.email === credentials.email && account.password === credentials.password)) {
            setIsAuth(true);
            localStorage.setItem("auth", "true");
            localStorage.setItem("username", credentials.email.split("@")[0])
            dispatch(setCurUserAction(credentials))
        }
        else {
            setLoginMessage(<p style={{color:"#d33030", marginLeft:"50px", marginBottom:"-10px"}}>Wrong email or password!</p>);
        }
        
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCredentials({...credentials, [name]: value});
    }

    return (
        <LoginForm
            credentials = {credentials}
            loginMessage = {loginMessage}
            onLoginSubmit = {onLoginSubmit}
            handleChange = {handleChange}
        />
    );
}

export default Login;