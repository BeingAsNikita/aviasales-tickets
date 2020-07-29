import React, { useEffect } from 'react';
import './App.scss';
import TransferFilter from './Components/TransferFilter/TransferFilter';
import PriceFilter from './Components/PriceFilter/PriceFilter';
import TicketsList from './Components/TicketsList/TicketsList';
import { connect } from 'react-redux';
import { getSearchId } from './Store/appReduser';


const App = ({ tickets, getSearchId, initialized }) => {
  useEffect(() => {
    getSearchId()

  }, [])

  return (
    initialized ?
      <div className="app__container">
        <div className="sidebar">
          <TransferFilter />
        </div>
        <div className="content">
          <PriceFilter />
          <TicketsList tickets={tickets} />
        </div>


      </div>
      : 'Loading'
  );
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  searchId: state.app.searchId,
  tickets: state.app.tickets
})

export default connect(mapStateToProps, { getSearchId })(App);
