import React from 'react';
import Table from 'react-bootstrap/Table';
import './App.css'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        document.title = "Destinos Maestros";
        fetch('http://localhost:8000/travel-destination/Porcuna')
            .then(results => {
                return results.json();
            }).then(data => {
            this.setState({
                data: data.data[0]
            });
        });
    }

    getTable() {
        return (
            <Table>
                <thead>
                <tr>
                    <th>Desde</th>
                    <th>Hasta</th>
                    <th>Tiempo</th>
                    <th>Distancia</th>
                </tr>
                </thead>
                <tbody>
                {this.getTableRows()}
                </tbody>
            </Table>
        );
    }

    getTableRows() {
        return this.state.data.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.from}</td>
                    <td>{item.to}</td>
                    <td>{item.time}</td>
                    <td>{item.distance}</td>
                </tr>
            );
        })
    }

    render() {
        return (
            <div>
                <div className="price_table">
                    {this.getTable()}
                </div>
            </div>
        );
    }
}

export default App