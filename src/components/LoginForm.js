import React, {useState, useContext} from "react";
import { authContext } from "../contexts/AuthContext";

const LoginForm = ({history}) => {
    const {setAuthData} = useContext(authContext);

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const onFormSubmit = e => {
        e.preventDefault();
        // TODO: handle login Auth
        console.log(username, password);
        setAuthData(username);
        history.replace(`/users/${username}`);
    } 

    return (
        <form onSubmit={onFormSubmit}>
            Login Form
            <button>Submit</button>
        </form>
    );
}

export default LoginForm;