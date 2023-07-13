import React from "react";
import ReactDOM from "react-dom/client";
import {
  ChakraProvider,
  ColorModeScript,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import App from "./App";
import theme from "./theme";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import CalculateGame from "./pages/CalculateGame";
import UploadGame from "./pages/UploadGame";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Grid>
          <GridItem area="nav">
            <NavBar></NavBar>
          </GridItem>
        </Grid>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/uploadgame" element={<UploadGame />} />
          <Route path="/calculategame" element={<CalculateGame />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
