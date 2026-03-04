//import the hook useState
import { useState } from "react";
function Login()
{
    //declare the state/variable for username
    const[username,setUserName]=useState("");
    //declare the state/variable for password
    const[password,setPassword]=useState("");
    //declare the state/variable for succes/fail message
    const[message,setMessage]=useState("");
    
    function validateLogin(e)
    {
        e.preventDefault();
        const sampleUN = "admin";
        const samplePW="123";
        if(username==sampleUN && password == samplePW)
            setMessage("Login Success");
        else
            setMessage("Login Fail");
    }

    //design the login form
    return(
        <div>
            <h2>Login Form</h2>
            <form onSubmit={validateLogin}>
                {/* design the input for username */}
                <input type="text" placeholder="Enter username"
                    value={username}
                    onChange={(e)=>setUserName(e.target.value)}
                />
                <br />
                {/* design the input for password */}
                <input type="password" placeholder="Enter password"
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <br />
                {/* design the button */}
                <button type="submit">Login</button>
            </form>
            {/* display success/fail message */}
            <p>{message}</p>
        </div>
    );
}
export default Login;