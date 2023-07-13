import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/1.sm.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/uploadgame">Upload Game</Link>
        </li>
        <li>
          <Link to="/calculategame">Calculate Game</Link>
        </li>
      </ul>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
