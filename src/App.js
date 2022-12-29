import "./App.css";
import Home from "./components/Home";
import React from "react";
import background from "./assets/simple.jpg";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#bab6f3" },
    secondary: { main: "#123456" },
  },
  typography: {
    fontFamily: "Prosto One",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        {/* <button onClick={getName}>Click</button> */}
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
