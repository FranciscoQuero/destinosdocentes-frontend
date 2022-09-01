import React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

const Input = styled(MuiInput)`
  width: 42px;
`;

interface inputProps {
    texto: string,
    minValue: number,
    maxValue: number,
    onChange: () => {}
}

export default class DestinationsNumberSlider extends React.Component <any, any> {

    constructor(props: inputProps) {
        super(props);
        this.state = {
            texto: props.texto,
            minValue: props.minValue,
            maxValue: props.maxValue,
            currentValue: 120,
            onChange: props.onChange
        };
    }

    _handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = (event.target.value === '' ? '' : Number(event.target.value));
        this.setState({currentValue: value});
        this.state.onChange(value);
  };

    _handleSliderChange = (event: Event, newValue: number | number[]) => {
        this.setState({currentValue: newValue});
        this.state.onChange(newValue);
    };

    _handleBlur = (event: Event, value: number | number[]) => {
        if (value < this.state.minValue) {
            this.setState({currentValue: this.state.minValue});
        } else if (value > this.state.maxValue) {
            this.setState({currentValue: this.state.maxValue});
        }
    };

    render() {
        return (
            <Box sx={{width: 250}}>
                <Typography id="input-slider" gutterBottom>
                    {this.state.texto}
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                    </Grid>
                    <Grid item xs>
                        <Slider
                            value={typeof this.state.currentValue === 'number' ? this.state.currentValue : 0}
                            onChange={this._handleSliderChange}
                            aria-labelledby="input-slider"
                            step={10}
                            min={this.state.minValue}
                            max={this.state.maxValue}
                        />
                    </Grid>
                    <Grid item>
                        <Input
                            value={this.state.currentValue}
                            size="medium"
                            onChange={this._handleInputChange}
                            //onBlur={this._handleBlur}
                            inputProps={{
                                step: 10,
                                min: this.state.minValue,
                                max: this.state.maxValue,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        );
    }
}