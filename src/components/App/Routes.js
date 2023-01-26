import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../../pages/home";
import Dashboard from "../../pages/dashboard.js";
// import useToken from "../useToken";
import LogIn from "../../pages/logIn";
import SignUp from "../../pages/signUp";
import { AuthContext } from "../context/authContext";
import Contact from "../../pages/contact";

function App() {
  // const { token, setToken } = useToken();
  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  const currentUser = useContext(AuthContext);
  // const currentUser = true;
  // change it to false normal

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/login' />;
  };
  // console.log(currentUser);
  return (
    // <div className='wrapper'>
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/contact' element={<Contact />} />

          {/* <RequireAuth> */}
          <Route
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path='/dashboard' element={<Dashboard />} />
          {/* </RequireAuth> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
