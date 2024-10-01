import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
