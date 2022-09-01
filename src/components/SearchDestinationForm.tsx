import React, { Component } from "react";
import {Autocomplete, Button, Box, CardContent, CardActions, TextField} from '@mui/material';
import DestinationsDataGrid from "./DestinationsDataGrid";
import DestinationsNumberSlider from "./DestinationsNumberSlider";
import Typography from "@mui/material/Typography";

export default class SearchDestinationForm extends Component {
    state = {
        town: "",
        limit: 120,
        shouldRenderForm: true
    };

    handleTownChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({town: event.currentTarget.value})
    };

    handleSliderChange = (value: number) => {
        this.setState({limit: value})
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.setState({shouldRenderForm: false});
    };

    _handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({shouldRenderForm: true});
    };

    _renderTextInput() {
        return (
            <TextField margin="normal"
                       required
                       fullWidth
                       id="town"
                       autoFocus
                       label="Introduce tu localidad"
                       size='small'
                       onChange={this.handleTownChange}
                       name='town'
            />
        )
    }

    _renderSubmitButton() {
        return (
            <Button
                type="submit"
                style={{ marginLeft: "auto" }}
                variant="contained"
                size="large"
                color="primary"
                fullWidth={true}
            >
                Buscar
            </Button>
        );
    }

    _renderBackButton() {
        return (
            <Button
                style={{ marginLeft: "auto", flexGrow: 1 }}
                variant="contained"
                size="medium"
                color="secondary"
                onClick={this._handleBack}
            >
                Atrás
            </Button>
        )
    }

    render() {
        if (this.state.shouldRenderForm) {
            return (
                <>
                <Typography component="h1" variant="h5">
                Busca el mejor orden para tu próximo destino
                </Typography>
                <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
                            {this._renderTextInput()}
                            <DestinationsNumberSlider texto='Número de destinos:' minValue={10} maxValue={500} onChange={this.handleSliderChange}/>
                            {this._renderSubmitButton()}
                </Box></>
            );
        } else {
            return (
                <>
                    <Typography component="h1" variant="h5">
                        Estos son los mejores destinos si vives en {this.state.town}:
                    </Typography>
                    <DestinationsDataGrid fromTown={this.state.town} limit={this.state.limit}/>
                    {this._renderBackButton()}
                </>
            );
        }
    }

}
