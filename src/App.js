import React, { useEffect, useState } from 'react';
import './App.scss';
import TransferFilter from './Components/TransferFilter/TransferFilter';
import PriceFilter from './Components/PriceFilter/PriceFilter';
import TicketsList from './Components/TicketsList/TicketsList';
import { connect } from 'react-redux';
import { getSearchId, filterSuccess, getTickets } from './Store/appReduser';
import { filtration, checkboxToggle } from './utils/filters';




const App = ({ tickets, getSearchId, initialized, filterSuccess, searchId, stop }) => {

  let [filters, setFilters] = useState({
    price: 'isCheap',
    all: false,
    no: false,
    one: false,
    two: false,
    three: false,
  })

  let [newTickets, setNewTickets] = useState(null)

  useEffect(() => {
    getSearchId()
    getTickets(searchId)
  }, [])

  useEffect(() => {
    setNewTickets(tickets)
  }, [tickets])

  const onFilterChangeHandler = (e) => {
    let filter = e.target.id
    let newFilters = checkboxToggle(filter, filters)
    setFilters(newFilters)
    console.log(newFilters)
    setNewTickets(filtration(newFilters, tickets))
  }

  return (
    initialized ?
      <div className="app__container">
        <div className="sidebar">
          <TransferFilter filters={filters} onChange={onFilterChangeHandler} />
        </div>
        <div className="content">
          <PriceFilter filters={filters} onChange={onFilterChangeHandler} />
          <TicketsList tickets={newTickets} filters={filters} />
        </div>


      </div>
      : 'Loading'
  );
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  searchId: state.app.searchId,
  tickets: state.app.tickets,
  stop: state.app.stop
})

export default connect(mapStateToProps, { getSearchId, filterSuccess, getTickets })(App);
