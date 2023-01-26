import "../style/login.css";
import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/context/authContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);
  const [status, setStatus] = useState("typing");

  const handleLogin = (e) => {
    e.preventDefault();
    setStatus("submitting");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        setStatus("success");
        console.log(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className='login'>
      <h2>Sign in</h2>
      <form
        onSubmit={handleLogin}
        style={{ display: "flex", flexDirection: "column" }}>
        <label>
          <input
            type='text'
            label='email'
            name='email'
            value={email}
            placeholder='email'
            disabled={status === "submitting"}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type='password'
            label='password'
            value={password}
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div style={{ marginTop: 20 }}>
          <button
            type='submit'
            disabled={email === 0 || status === "submitting"}>
            Submit
          </button>
        </div>
        {error && (
          <span style={{ marginTop: 10, color: "tomato" }}>
            Wrong email or password!
          </span>
        )}
      </form>
    </div>
  );
}
