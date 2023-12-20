"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import bcrypt from "bcryptjs";
import axios from "axios";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const hashedPassword = await hashPassword(formData.get("password"));
  
    const userData = {
      first_name: formData.get("firstName"),
      last_name: formData.get("lastName"),
      email: formData.get("email"),
      password: hashedPassword,
    };
  
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
  
    try {
      const response = await axios.post("http://localhost:3000/api/user", userData, config);
      console.log("User successfully created:", response.data);
    } catch (error) {
      console.error("Error creating user:", error.response.data);
    }
  };  

  const hashPassword = async (password) => {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  };

  const linkStyle = {
    color: "blue", // Change the color to your preferred color
    textDecoration: "none",
    "&:hover": {
      color: "red", // Change the hover color to your preferred color
    },
  };

  return (
    <div className="flex min-h-screen bg-gray-800">
      <Grid
        container
        component="main"
        className="mr-12 ml-12 mt-10 mb-10 border rounded-lg"
      >
        <CssBaseline />
        
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
          }}
          style={{
            borderTopLeftRadius: "0.5rem",
            borderBottomLeftRadius: "0.5rem",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          className="bg-white shadow-md pl-10 pr-10 pt-3 pb-3"
          style={{
            borderTopRightRadius: "0.5rem",
            borderBottomRightRadius: "0.5rem",
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="p-2"
          >
            <Avatar sx={{ m: 1, bgcolor: "#333" }}>
              <LockOutlinedIcon />
            </Avatar>
          </Box>

          <h1 className="text-center">Sign Up</h1>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
                  InputProps={{
                    endAdornment: (
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
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I proceeded to sign up for the service, carefully reading and ultimately agreeing to the terms and conditions"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="bg-gray-800 hover:bg-gray-600"
              // href="/pages/home"
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                Already have an account?
                <Link href="../" variant="body2" style={linkStyle}>
                  Sign In
                </Link>
              </Grid>
            </Grid>
          </Box>
          
        </Grid>
      </Grid>
    </div>
  );
}
