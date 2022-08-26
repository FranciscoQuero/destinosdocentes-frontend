import React, { Component } from "react";
import {Autocomplete, Button, Card, TextField} from '@mui/material';
import DestinationsDataGrid from "./DestinationsDataGrid";
import Box from "@mui/material/Box";

export default class SearchDestinationForm extends Component {
    state = {
        town: "",
        limit: 120,
        shouldRenderForm: true
    };


    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({town: event.currentTarget.value})
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
                       onChange={this.handleChange}
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
                size="medium"
                color="primary"
            >
                Buscar
            </Button>
        );
    }

    _renderBackButton() {
        return (
            <Button
                style={{ marginLeft: "auto" }}
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
                <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
                            {this._renderTextInput()}
                            {this._renderSubmitButton()}
                </Box>
            );
        } else {
            return (
                <>
                    <DestinationsDataGrid fromTown={this.state.town}/>
                    {this._renderBackButton()}
                </>
            );
        }
    }

}
