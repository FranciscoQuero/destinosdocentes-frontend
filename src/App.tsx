import React from "react";
import SearchDestinationForm from "./components/SearchDestinationForm";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

export default class App extends React.Component {
  theme = createTheme();

  render() {
    return (
        <ThemeProvider theme={this.theme}>
          <Container component='main' maxWidth='lg'>
              <CssBaseline />
            <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
            >
              <SearchDestinationForm/>
            </Box>
          </Container>
        </ThemeProvider>
    )
  }
}
