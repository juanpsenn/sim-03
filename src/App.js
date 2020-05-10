import React from "react";
import "./App.css";
import Layout from "./components/layout";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {esES} from "@material-ui/core/locale";

const theme = createMuiTheme({}, esES);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout/>
    </ThemeProvider>
  );
}

export default App;
