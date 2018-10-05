import React, { Component } from 'react';

export class FetchData extends Component {
  displayName = FetchData.name

  constructor(props) {
    super(props);
    this.state = { items : [], loading: true };

      fetch('http://192.168.2.8:3000/viewAllErrors')
      .then(response => response.json())
      .then(data => {
        this.setState({ items : data, loading: false });
      });
  }

  static renderItemsTable(items) {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Kunde</th>
            <th>Produkt</th>
            <th>Version</th>
                    <th>Stacktrace</th>
                    <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item =>
            <tr key={item.customer}>
              <td>{item.customer}</td>
              <td>{item.product}</td>
              <td>{item.version}</td>
              <td>{item.name}</td>
              <td>{item.id}</td>
                  
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderItemsTable(this.state.items);

    return (
      <div>
        <h1>Feilmelding sentral testdata </h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
