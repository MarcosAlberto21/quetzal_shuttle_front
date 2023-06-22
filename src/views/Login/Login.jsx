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
  CardHeader,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useAuth } from "../../auth";
import logo from "../../assets/Q_Logo_FndTransparente.png";
import barnerLogo from "../../assets/QuetzalShuttle_Logo_FndTransparente.png";
import Footer from "../../components/footer";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


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
    auth.login({ username });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      initSession(event);
      console.log("Enter key pressed ✅");
    }
  };

  return (
    <>
      <div
        className="contenedor"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#aaa0a0",
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
              style={{ backgroundColor: "#aaa0a0", padding: "0px" }}
            >
              <Card
                sx={{
                  borderRadius: "30px",
                  boxShadow: "0px 100px 50px 0px rgba(0,0,0,0.25)",
                  [theme.breakpoints.down("lg")]: {
                    maxWidth: "40%",
                  },
                  [theme.breakpoints.down("md")]: {
                    maxWidth: "30%",
                  },
                  [theme.breakpoints.down("sm")]: {
                    display: "none",
                  },
                  [theme.breakpoints.down("xs")]: {
                    display: "none",
                  },
                }
                }
              >
                <CardContent>
                  <Typography

                    align="center"
                    style={{
                      color: "#555555", fontWeight: "bold",
                      fontSize: "1.5rem", letterSpacing: "0.1rem"
                    }}
                  >
                    Welcom to Quetzal Shuttle
                  </Typography>

                </CardContent>
                <CardMedia
                  component="img"
                  image={logo}
                  alt="Paella dish"
                  height="70%"
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    [theme.breakpoints.down("lg")]: {
                      maxWidth: "40%",
                    },
                    [theme.breakpoints.down("md")]: {
                      maxWidth: "30%",
                    },
                    [theme.breakpoints.down("sm")]: {
                      display: "none",
                    },
                    [theme.breakpoints.down("xs")]: {
                      display: "none",
                    },
                    // ON HOVER EFFECTS

                    '&:hover': {
                      transition: "transform 5s ease",
                      animation: "cambiaColor 3s ease-in-out",
                    },

                    '@keyframes cambiaColor': {
                      "0%": {
                        transform: "rotate(0deg)",
                        bgcolor: "#77A100",
                      },
                      "20%": {
                        bgcolor: "#0D8A00",
                      },
                      "40%": {
                        bgcolor: "#116009",
                      },
                      "60%": {
                        bgcolor: "#5C5C5C",
                      },
                      "80%": {
                        bgcolor: "#B4B4B4",
                      },
                      "100%": {
                        bgcolor: "#fffff",
                      }
                    }
                  }}
                />
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                padding: "15px",
                backgroundColor: "#fff",
                display: "flex",
                boxShadow: "0px 100px 50px 0px rgba(0,0,0,0.25)",
                flexDirection: "column",
                borderRadius: "30px",
                alignItems: "center",
              }}
            >
             
                <img
                  src={barnerLogo}
                  height={150}
                ></img>
         
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
                <Grid container 
                direction="column"
                justifyContent="space-between" alignItems="center">
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
      <Footer />
    </>
  );
}

export { Login };
