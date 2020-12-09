import React, {useState} from "react";

const LoginForm = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const onFormSubmit = e => {
        e.preventDefault();
        // TODO: handle login Auth
        console.log(username, password);
    } 

    return (
        <form onSubmit={onFormSubmit}>
            Login Form
            <button>Submit</button>
        </form>
    );
}

export default LoginForm;