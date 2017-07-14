import React from 'react';
import Chart from './Chart';
import Loading from './Loading';
import StockList from './StockList';
import AddStock from './AddStock';
import Footer from './Footer';
import '../styles/app.css';

const App = () => (
  <div className="main container">
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
        <Footer />
      </div>
    </div>
  </div>
)

export default App;
