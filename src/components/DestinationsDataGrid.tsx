import DestinationsPresenter from "../presenters/DestinationsPresenter";
import React from "react";
import {DataGrid, esES} from "@mui/x-data-grid";
import {Grid, Paper} from "@mui/material";
import GetDestinationsAPIConnector from "../connectors/GetDestinationsAPIConnector";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";

interface DestinationsProps {
    fromTown: string
}

export default class DestinationsDataGrid extends React.Component <any, any> {

    constructor(props: DestinationsProps) {
        super(props);
        this.state = {
            fromTown: this.props.fromTown,
            theme: createTheme(),
            rows: [{id: 0, from: '', to: '', distance: '', time: ''}],
            columns: [
                {field: 'id', headerName: '🔢 Orden', flex: 0.5,},
                {
                    field: 'from',
                    headerName: '🏠 Desde',
                    editable: false,
                    flex: 1,
                },
                {
                    field: 'to',
                    headerName: '🗺️ Hasta',
                    editable: false,
                    flex: 1,
                },
                {
                    field: 'time',
                    headerName: '⏱ Tiempo',
                    type: 'number',
                    editable: false,
                    flex: 0.75,
                },
                {
                    field: 'distance',
                    headerName: '🚘 Distancia',
                    editable: false,
                    type: 'number',
                    flex: 0.75,
                },
            ]
        };
    }

  componentDidMount() {
    this._renderDestinationsDataGrid()
  }

  _renderDestinationsDataGrid() {

    const connector = new GetDestinationsAPIConnector();
    const presenter = new DestinationsPresenter();

    connector.getDestinations(this.props.fromTown, 120)
        .then((response) => {
            const rows = presenter.getDestinationsData(response);
            this.setState({rows: rows});
        });
  }

  render() {
      return (
          <Grid container style={{height: 800, width: '100%'}}>
              <DataGrid
                  rows={this.state.rows}
                  columns={this.state.columns}
                  pageSize={50}
                  rowsPerPageOptions={[50]}
                  localeText={esES.components.MuiDataGrid.defaultProps.localeText}
              />
          </Grid>
      )
  }
}
