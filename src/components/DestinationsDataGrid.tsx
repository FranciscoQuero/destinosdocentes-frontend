import DestinationsPresenter from "../presenters/DestinationsPresenter";
import React from "react";
import {DataGrid, esES} from "@mui/x-data-grid";
import GetDestinationsAPIConnector from "../connectors/GetDestinationsAPIConnector";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";

interface DestinationsProps {
    fromTown: string,
    limit?: number
}

export default class DestinationsDataGrid extends React.Component <any, any> {

    constructor(props: DestinationsProps) {
        super(props);
        this.state = {
            fromTown: this.props.fromTown,
            limit: this.props.limit,
            theme: createTheme(),
            rows: [{id: 0, from: '', to: '', distance: '', time: ''}],
            columns: [
                {field: 'id', headerName: '#', flex: 0.15, maxWidth: 50},
                {
                    field: 'to',
                    headerName: 'Destino',
                    editable: false,
                    minWidth: 150,
                    flex: 1,
                },
                {
                    field: 'state',
                    headerName: 'Provincia',
                    editable: false,
                    minWidth: 100,
                    flex: 0.85,
                },
                {
                    field: 'time',
                    headerName: 'Tiempo',
                    editable: false,
                    minWidth: 75,
                    flex: 0.65,
                },
                {
                    field: 'distance',
                    headerName: 'Distancia',
                    editable: false,
                    minWidth: 75,
                    flex: 0.65
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

    connector.getDestinations(this.state.fromTown, this.state.limit)
        .then((response) => {
            const rows = presenter.getDestinationsData(response);
            this.setState({rows: rows});
        });
  }

  render() {
      return (
          <Box style={{height: 500, width: '100%'}}>
              <DataGrid
                  rows={this.state.rows}
                  columns={this.state.columns}
                  pageSize={50}
                  rowsPerPageOptions={[50]}
                  localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                  getRowHeight={() => 'auto'}
              />
          </Box>
      )
  }
}
