import React from "react";
import SearchDestinationForm from "./components/SearchDestinationForm";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Box, Container, Typography} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import InstagramIcon from '@mui/icons-material/Instagram';

export default class App extends React.Component {
  theme = createTheme();

  render() {
    return (
        <ThemeProvider theme={this.theme}>
            <Container component='main' maxWidth='lg'>
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <SearchDestinationForm/>
                </Box>
            </Container>
            <Container component='footer' maxWidth='xs'>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'justify-center',
                    }}
                >
                <Typography variant="body1" gutterBottom align='center'>
                    Estamos desarrollando el <strong>Cuaderno Docente Virtual</strong> que <strong>REVOLUCIONARÁ</strong> la forma en la que das clase.
                </Typography>
                <Typography variant="body1" gutterBottom align='center'>
                    ¿Quieres probarlo antes que nadie? ¡<a href='https://forms.gle/erVBDVmnmcmvAAYr5' target="_blank" rel='noreferrer'>Inscríbete aquí</a> y te avisaremos cuando esté disponible!
                </Typography>
                </Box>
            </Container>
            <Container component='footer' maxWidth='sm'>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'justify-center',
                    }}
                >

                <Typography variant="body2" gutterBottom align='center'>
                    <a href='https://www.instagram.com/maestra_ana_morente/?hl=es' target="_blank" rel='noreferrer'><InstagramIcon fontSize="small"/> Diseñado con la colaboración de @maestra_ana_morente</a>
                </Typography>
                </Box>
            </Container>
        </ThemeProvider>
    )
  }
}
