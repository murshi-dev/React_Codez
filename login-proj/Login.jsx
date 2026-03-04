import { useState } from "react";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  	function handleSubmit(e) {
    		e.preventDefault();
    		const correctUsername = "admin";
    		const correctPassword = "1234";
    		if (username === correctUsername && password === correctPassword) 
{
      			setMessage("Login Successful");
    		} else {
     			 setMessage("Invalid Credentials");
   			}
  }
  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /><br />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
export default Login;
