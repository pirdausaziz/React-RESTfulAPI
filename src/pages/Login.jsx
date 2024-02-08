import { useState } from "react";

const Login = ({ setAllowed }) => {

    const [state, setState] = useState({ 
        email: "",
        password: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(state);
        const verify = true;
        !verify && (alert("Can't Login"));
        setAllowed(verify ? true : false);
    };

    const handleInputChange = (event) => {
        const {name, value } = event.target;
        console.log(`name: ${name}, value: ${value}`);
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    return (
        <div>
            <h1>Welcome to Admin Website</h1>
            <form onSubmit={handleSubmit}>
                <h3>Email: <input 
                            type="text" 
                            name="email"
                            onChange={handleInputChange}
                            value={state.name}/>
                            </h3>
                <h3>Password: <input 
                                type="text" 
                                name="password"
                                onChange={handleInputChange}
                                value={state.password}/>
                                </h3>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};
export default Login;