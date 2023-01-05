import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);
  const [status, setStatus] = useState("typing");

  // if (status === "success") {
  //   return (
  //     <>
  //       {/* <h1>Welcome</h1> */}
  //       {/* <p>return</p> */}
  //       <h3>
  //         <a style={{ color: "#77ffee" }} href={"/dashboard"}>
  //           Your Dashboard
  //         </a>
  //       </h3>
  //     </>
  //   );
  // }

  const handleLogin = (e) => {
    e.preventDefault();
    setStatus("submitting");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setStatus("submitting");
  //   try {
  //     setEmail(e.target.value);
  //     setPassword(e.target.value);
  //     const user = {
  //       email,
  //       password,
  //     };
  //     setStatus("success");
  //     console.log(user);
  //   } catch (err) {
  //     setStatus("typing");
  //     setError(err);
  //   }
  // };

  return (
    <div style={{ marginTop: 200, width: 300, marginLeft: "33%" }}>
      <h2>Sign in</h2>
      <form
        // onSubmit={handleSubmit}
        onSubmit={handleLogin}
        style={{ display: "flex", flexDirection: "column" }}>
        <label>
          <input
            type='text'
            label='email'
            name='email'
            value={email}
            placeholder='email'
            // disabled={status === "submitting"}
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
        <div style={{ marginTop: 10 }}>
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
        {/* {error !== null && <p className='Error'>{error.message}</p>} */}
      </form>
    </div>
  );
}
