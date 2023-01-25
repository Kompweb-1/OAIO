import React, { useContext } from "react";
// import { Route, Routes } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../../Pages/home";
import Dashboard from "../../Pages/Dashboard.js";
// import useToken from "../useToken";
import LogIn from "../../Pages/LogIn";
import SignUp from "../../Pages/SignUp";
import { AuthContext } from "../context/AuthContext";
import Contact from "../../Pages/Contact";

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
