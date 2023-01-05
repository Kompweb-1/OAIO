import React, { useState } from "react";
import "../../style/Modal.css";
import clsx from "clsx";
import { styled, Box } from "@mui/system";
// import Button from "@mui/material/Button";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TextField from "@mui/material/TextField";
// import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
// import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// async function loginUser(credentials) {
//   return fetch("http://localhost:8080/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   }).then((data) => data.json());
// }

const BackdropUnstyled = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "MuiBackdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

BackdropUnstyled.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

// const button = (theme) => ({
//   width: 200,
//   height: 40,
//   color: "black",
//   bgcolor: theme.palette.mode === "dark" ? "#0A1929" : "white",
//   border: "2px solid black",
//   margin: "20px 0",
// });

export default function LoginModal() {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserName(e.target.value);
    setPassword(e.target.value);
    const token = await {
      username,
      password,
    };
    navigate("/dashboard", { replace: true });
    console.log(token);
    // setToken(token);
  };
  // console.log(handleSubmit);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <FingerprintIcon
        className='App-btn pulse-btn'
        type='button'
        onClick={handleOpen}
      />
      <Modal
        aria-labelledby='modal-title'
        aria-describedby='modal-description'
        open={open}
        onClose={handleClose}
        slots={{ backdrop: Backdrop }}>
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            backgroundColor: "white",
            width: 330,
            height: 480,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <FormControl variant='standard' onSubmit={handleSubmit}>
            <InputLabel htmlFor='input-with-icon-adornment'>
              username:
            </InputLabel>
            <Input
              style={{ marginTop: 10 }}
              id='input-with-icon-adornment'
              endAdornment={
                <InputAdornment position='end'>
                  {/* <AlternateUserIcon /> */}
                </InputAdornment>
              }
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              style={{ marginTop: 10 }}
              id='input-with-icon-textfield'
              type={showPassword ? "text" : "password"}
              // type='password'
              label='password:'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      type='password'
                      onChange={(e) => setPassword(e.target.value)}
                      edge='end'>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant='standard'
            />
            <TextField
              style={{ marginTop: 10, marginBottom: 20 }}
              id='input-with-sx'
              label='(personal ****)'
              variant='standard'
            />
            <Button
              style={{
                fontSize: 14,
                marginTop: 20,
                marginBottom: 20,
                background: "black",
                width: 120,
                height: 32,
                color: "#7fffd4",
              }}
              className='pulse-btn'
              type='submit'
              onClick={handleSubmit}>
              Submit
            </Button>
            <a
              href='/signup'
              style={{ fontSize: 14, textAlign: "right", marginTop: 20 }}>
              New User Signup
            </a>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
// LoginModal.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
