import { Component } from 'react';
import { Grid } from 'react-loader-spinner';
import './Loader.css';
// Componenta Loader
export class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <Grid
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          wrapperClassName="loader"
        />
      </div>
    );
  }
}
