import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    const user = { username, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration Successful");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="form-box">
      <h2>Register</h2>
      <form onSubmit={registerUser}>
        <input type="text" placeholder="Username" value={username}
          onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default Register;