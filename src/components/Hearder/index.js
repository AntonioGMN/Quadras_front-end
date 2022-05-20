import { Box } from "@mui/material";
import Logo from "../logo";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import * as api from "../../services/apiService";
import { useEffect, useState } from "react";
import UserMenu from "../Menu";
import MenuItem from "@mui/material/MenuItem";
import { boxStyle, HearderStyle, LoginButton, SelectSyle } from "./styles";

export default function Hearder() {
  const { user, logout } = useAuth();

  return (
    <HearderStyle>
      <Logo />
      {user == null ? (
        <Box sx={boxStyle}>
          <Link to={"/login"}>
            <LoginButton>Login</LoginButton>
          </Link>
          <Link to={"/cadastro"}>
            <LoginButton>Sign Up</LoginButton>
          </Link>
        </Box>
      ) : (
        <SelectSyle>
          <p>{user.name}</p>
          <UserMenu>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </UserMenu>
        </SelectSyle>
      )}
    </HearderStyle>
  );
}
