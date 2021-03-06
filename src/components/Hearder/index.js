import { Box, Avatar } from "@mui/material";
import Logo from "../logo";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import UserMenu from "../Menu";
import MenuItem from "@mui/material/MenuItem";
import { boxStyle, HearderStyle, LoginButton, SelectSyle } from "./styles";
import { pink } from "@mui/material/colors";

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
          <Avatar />
          <UserMenu>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </UserMenu>
        </SelectSyle>
      )}
    </HearderStyle>
  );
}
