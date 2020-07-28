import React from 'react';
import './App.scss';
import TransferFilter from './Components/TransferFilter/TransferFilter';
import PriceFilter from './Components/PriceFilter/PriceFilter';
import Ticket from './Components/Ticket/Ticket';

const App = () => {
  return (
    <>  
      <div className="app__container">
      

        <TransferFilter />
        <PriceFilter />
        <Ticket />
      </div>
    </>
  );
}

export default App;
