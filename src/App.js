import React from 'react';
import './index.css'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        document.title = "Destinos Maestros";
        fetch('http://192.168.5.150:8000/travel-destination/Porcuna')
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
            <table className="w-full whitespace-nowrap">
                <thead>
                <tr>
                    <th className="font-semibold text-left">🔢 Orden</th>
                    <th className="font-semibold text-left">🏠 Desde</th>
                    <th className="font-semibold text-left">🗺️ Hasta</th>
                    <th className="font-semibold text-left">⏱ Tiempo</th>
                    <th className="font-semibold text-left">🚘 Distancia</th>
                </tr>
                </thead>
                <tbody className="w-full items-center">
                    {this.getTableRows()}
                </tbody>
            </table>
        );
    }

    getTableRows() {
        return this.state.data.map((item, index) => {
            return (
                <tr key={index} className="focus:outline-none h-20 text-sm leading-none text-gray-800 dark:text-white  border-b border-t bg-white dark:bg-gray-800  hover:bg-gray-100 dark:hover:bg-gray-900  dark:hover:bg-gray-900    border-gray-100 dark:border-gray-700">
                    <td className="text-xs leading-3 text-gray-600 dark:text-gray-200 pr-1 text-center">{index+1}</td>
                    <td className="pl-4 leading-3 text-gray-600 dark:text-gray-200">{item.from}</td>
                    <td className="pl-4 leading-3 text-gray-600 dark:text-gray-200">{item.to}</td>
                    <td className="pl-4 leading-3 text-gray-600 dark:text-gray-200">{item.time}</td>
                    <td className="pl-4 leading-3 text-gray-600 dark:text-gray-200">{item.distance}</td>
                </tr>
            );
        })
    }

    render() {
        return (
            <div className="flex items-center justify-center py-8">
                <div className="w-full max-w-4xl px-4">
                    <div className="rounded-lg bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto max-w-2xl">
                        {this.getTable()}
                    </div>
                </div>
            </div>
        );
    }
}

export default App