import React from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import forEach from 'lodash/forEach';
import get  from 'lodash/get';
import { useTable, useSortBy } from 'react-table';

/*const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  )
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(
            (row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )}
          )}
        </tbody>
      </table>
    </>
  )
}*/

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = { data: [] } ;
  }

  componentDidMount() {
    document.title = "Destinos Maestros";
    fetch('http://localhost:8000/travel-destination/Porcuna')
    .then(results => {
      return results.json();
    }).then(data => {
        this.setState({
          data: data.data
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
                 { this.getTableRows()}
             </tbody>
            </Table>
        );
    }

    getTableRows() {
      return this.state.data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{ item.from }</td>
                          <td>{ item.to }</td>
                          <td>{ item.time }</td>
                          <td>{ item.distance }</td>
                        </tr>
                      );
                    })
    }

  render() {
    return (
      <div>
        <div className = "price_table">
        {this.getTable()}
      </div>
    </div>
    );
  }
}

export default App