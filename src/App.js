import React, { useEffect, useState } from 'react';
import './App.scss';
import TransferFilter from './Components/TransferFilter/TransferFilter';
import PriceFilter from './Components/PriceFilter/PriceFilter';
import TicketsList from './Components/TicketsList/TicketsList';
import { connect } from 'react-redux';
import { getSearchId, filterSuccess } from './Store/appReduser';


const App = ({ tickets, getSearchId, initialized, filterSuccess }) => {

  let[filters, setFilters] = useState({
      price: 'isCheap',
      all: false,
      no: false,
      one: true,
      two: false,
      three: false,
  })

  useEffect(() => {
    getSearchId()

  }, [])

  const onFilterChangeHandler = (e) => {
    let filter = e.target.id
    let newFilters = {...filters, [filter]: !filters[filter]}
    if(filter === 'isFast' || filter === 'isCheap') {
      newFilters.price = filter
    }
    setFilters(newFilters)
    filterSuccess(newFilters)

  }

  return (
    initialized ?
      <div className="app__container">
        <div className="sidebar">
          <TransferFilter filters={filters} onChange={onFilterChangeHandler} />
        </div>
        <div className="content">
          <PriceFilter filters={filters} onChange={onFilterChangeHandler} />
          <TicketsList tickets={tickets} filters={filters}/>
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

export default connect(mapStateToProps, { getSearchId, filterSuccess })(App);
