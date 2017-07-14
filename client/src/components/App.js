import React from 'react';
import { Chart, Loading, StockList, AddStock, Footer } from './';
import '../styles/app.css';

const App = () => (
  <div className="main container-fluid">
    <div className="row justify-content-center">
      <div className="col-sm-12">
        <h1 className="title text-sm-center">Watch the stocks</h1>
      </div>
      <div className="col-sm-12">
        <Loading />
      </div>
      <div className="col-sm-12">
        <Chart />
      </div>
      <div className="col-sm-12">
        <StockList />
      </div>
      <div className="col-sm-12">
        <AddStock />
      </div>
      <div className="col-sm-12">
        <hr />
        <Footer />
      </div>
    </div>
  </div>
)

export default App;
