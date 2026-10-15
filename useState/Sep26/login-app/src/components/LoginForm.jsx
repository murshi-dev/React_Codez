import { useState } from "react";
function LoginForm() {
  //state/variable for username
  const [username, setUserName] = useState("");
  //state/variable for password
  const [password, setPassword] = useState("");
  //state/variable for success/error message
  const [message, setMessage] = useState("");
  //function to handle the form
  function handleSubmit(e) {
    e.preventDefault(); //prevents the form from reloading the page
    //set static values fpr uername and password
    const validUsername = "admin";
    const validPassword = "123";
    //compare user entered values with static values
    if (username == validUsername && password == validPassword) {
      setMessage("Login Successful");
    } else {
      setMessage("Invalid Credentials");
    }
  }
  //design the UI for the login form
  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        {/* username textbox */}
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        {/* onchange --reflects the change in keystroke and updates the state */}
        <br />
        {/* password textbox */}
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {/* button --type=submit triggers the forms 'onSubmit'*/}
        <button type="submit">Login</button>
      </form>
      {/* success/fail message*/}
      <p>{message}</p>
    </div>
  );
}
export default LoginForm;
