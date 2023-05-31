import React from "react";
import { useTheme } from "@mui/material/styles";

import {
  CardMedia,
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Link,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useAuth } from "../../auth";

const fontColor = {
  color: "#5C5C5C",
  fontWeight: "bold",
};

function Login() {
  const auth = useAuth();
  const [username, setUsername] = React.useState('');
  const [Password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const theme = useTheme();

  const handleClickShowPassword = () =>
    setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
		setUsername(inputValue);
  };

  const handleInputChangePassword = (event) => {
    const inputValue = event.target.value;
    setPassword(inputValue);
  };

  const initSession = (event) => {
    event.preventDefault();
    auth.login({username});
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      initSession(event);
      console.log("Enter key pressed ✅");
    }
  };

  return (
    <div
      className="contenedor"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#B4B4B4",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ backgroundColor: "#B4B4B4", padding: "20px" }}
          >
            <CardMedia
              component="img"
              image="https://drive.google.com/uc?export=view&id=1uBo3RiZk8y9jxIkDTPwA80jHtutMTzTx"
              alt="Paella dish"
              height="100%"
              sx={{
                maxWidth: "45%",
                [theme.breakpoints.down("lg")]: {
                  maxWidth: "40%",
                },
                [theme.breakpoints.down("md")]: {
                  maxWidth: "30%",
                },
                [theme.breakpoints.down("sm")]: {
                  maxWidth: "20%",
                },
                [theme.breakpoints.down("xs")]: {
                  maxWidth: "10%",
                },
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              padding: "15px",
              backgroundColor: "#fff",
              display: "flex",
							boxShadow: "0px 1px 10px 0px rgba(0,0,0,0.25)",
              flexDirection: "column",
							borderRadius: "30px",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" component="h1" align="center" style={fontColor}>
              Welcome!
            </Typography>
            <form style={{ width: "100%", marginTop: "20px" }}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                color="success"
                value={username}
                onChange={handleInputChange}
              />

              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                sx={{ width: "100%", marginBottom: "10px" }}
                value={Password}
                onChange={handleInputChangePassword}
                onKeyDown={handleKeyDown}
                color="success"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />

              <Button
                variant="contained"
                color="success"
                fullWidth
                onClick={initSession}
              >
                Log In
              </Button>
              <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                  <Link href="#" variant="body2" style={fontColor}>
                    Forgot Password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" style={fontColor}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export { Login };
