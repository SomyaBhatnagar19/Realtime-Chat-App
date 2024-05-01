import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Typography,
  Button,
  Stack,
  Avatar,
  IconButton,
  // VisuallyHidden
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/style/styleComponents";
import { useFileHandler, useInputValidation } from "6pp";
import { usernameValidator } from "../utils/validators";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin((prev) => !prev);

  const username = useInputValidation("", usernameValidator);
  const phoneNo = useInputValidation("");
  const email = useInputValidation("");
  const password = useInputValidation("");


  const avatar = useFileHandler("single");

  const handleLogin = (e) => {
    e.preventDefault();
  }

  const handleSignUp = (e) => {
    e.preventDefault();
  }

  return (
    <div
      style={{
        backgroundColor: "#c4b5fd",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLogin ? (
        <h3>Heya! Catch up the latest gossips here.</h3>
      ) : (
        <h3>Unleash Your Voice, Unite in Conversation.</h3>
      )}
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={12}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLogin ? (
            /* Login */
            <>
              <Typography variant="h4">Login</Typography>
              <span style={{ marginTop: "15px", fontStyle: "italic" }}>
                Fill in your credentials to login.
              </span>
              <form onSubmit={handleLogin}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  margin="normal"
                  variant="outlined"
                  value={email.value}
                  onChange={email.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                <span
                  style={{
                    display: "block",
                    margin: "10px auto",
                    textAlign: "center",
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Forgot Password
                </span>

                <Button
                  sx={{ marginTop: "1rem" }}
                  variant="contained"
                  style={{
                    backgroundColor: "#4c1d95",
                    marginTop: 10,
                    width: "100%",
                  }}
                  type="submit"
                >
                  Login
                </Button>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <Typography sx={{ marginRight: "1rem" }}>
                    New User?
                  </Typography>
                  <Button
                    sx={{
                      color: "#5b21b6",
                      textDecoration: "underline",
                      "&:hover": {
                        backgroundColor: "transparent",
                        textDecoration: "underline",
                      },
                    }}
                    variant="text"
                    onClick={toggleLogin}
                  >
                    Sign Up
                  </Button>
                </div>
              </form>
            </>
          ) : (
            /* Sign up */
            <>
              <Typography variant="h4">Sign Up</Typography>
              <span style={{ marginTop: "15px", fontStyle: "italic" }}>
                Fill in your information.
              </span>
              <form onSubmit={handleSignUp}>
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  />

                {avatar.error && (
                  <Typography color="error" variant="caption">
                    {avatar.error}
                  </Typography>
                )}
                 
                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      color: "white",
                      bgcolor: "rgba(0,0,0,0.5)",
                      ":hover": {
                        bgcolor: "rgba(0,0,0,0.7)",
                      },
                    }}
                    component="label"
                  >
                    <>
                      <CameraAltIcon />
                      <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>
                    </>
                  </IconButton>
                </Stack>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />

                {username.error && (
                  <Typography color="error" variant="caption">
                    {username.error}
                  </Typography>
                )}

                <TextField
                  required
                  fullWidth
                  label="Email"
                  margin="normal"
                  variant="outlined"
                  value={email.value}
                  onChange={email.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Phone No"
                  margin="normal"
                  variant="outlined"
                  value={phoneNo.value}
                  onChange={phoneNo.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />

                <Button
                  sx={{ marginTop: "1rem" }}
                  variant="contained"
                  style={{
                    backgroundColor: "#4c1d95",
                    marginTop: 10,
                    width: "100%",
                  }}
                  type="submit"
                >
                  Sign Up
                </Button>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <Typography sx={{ marginRight: "1rem" }}>OR</Typography>
                  <Button
                    sx={{
                      color: "#5b21b6",
                      textDecoration: "underline",
                      "&:hover": {
                        backgroundColor: "transparent",
                        textDecoration: "underline",
                      },
                    }}
                    variant="text"
                    onClick={toggleLogin}
                  >
                    Login Instead
                  </Button>
                </div>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
