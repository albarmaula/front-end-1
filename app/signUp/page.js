"use client";
import * as React from "react";
import Box from "@mui/material/Box";
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

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const linkStyle = {
    color: 'blue', // Change the color to your preferred color
    textDecoration: 'none',
    '&:hover': {
      color: 'red', // Change the hover color to your preferred color
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <Box
        sx={{ display: "flex", flexWrap: "wrap" }}
        className="bg-white shadow-md p-8 rounded-lg w-80 bg-gray-800 justify-center"
      >
        <h1 className="font-semibold text-center mb-4 text-gray-800">Sign Up</h1>
        <TextField
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
          label="Username"
          className="w-full border rounded px-3 py-2 text-gray-800 border-gray-800"
        >
          <OutlinedInput
            id="outlined-adornment-username"
            endAdornment={<InputAdornment>Username</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              Radiance: "weight",
            }}
          />
        </TextField>
        <TextField
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
          label="Email"
          className="w-full border rounded px-3 py-2 text-gray-800 border-gray-800"
        >
          <OutlinedInput
            id="outlined-adornment-email"
            endAdornment={<InputAdornment>Email</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              Radiance: "weight",
            }}
          />
        </TextField>
        <FormControl
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
          className="w-full border rounded px-3 py-2 text-gray-800 border-gray-800"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
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
        </FormControl>
        <Button
          variant="contained"
          className="bg-gray-600 hover:bg-gray-500"
          size="large"
          href="../pages/home"
        >
          Sign Up
        </Button>
        <p className="mt-3">
          Already have account?{" "}
          <Link
            href="../"
            style={linkStyle}
          >
            Login
          </Link>
          .
        </p>
      </Box>
    </div>
  );
}