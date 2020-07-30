import React from 'react';
import './TransferFilter.scss';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';

const filtersCheckbox = [
  {
    name: 'all',
    type: 'checkbox',
    text: 'Все'
  },
  {
    name: 'no',
    type: 'checkbox',
    text: 'Без пересадок'
  },
  {
    name: 'one',
    type: 'checkbox',
    text: '1 пересадка'
  },
  {
    name: 'two',
    type: 'checkbox',
    text: '2 пересадки'
  },
  {
    name: 'three',
    type: 'checkbox',
    text: '3 пересадки'
  }
]

const TransferFilter = ({ onChange, filters }) => {
  return (
    <>
      <div className="transferFilter">
        <p className="transferFilter__title">Количество пересадок</p>
        <ul>
          {filtersCheckbox.map(filter => <CustomCheckbox
            {...filter} key={filter.name}
            filters={filters}
            onChange={onChange} />)}
        </ul>
      </div>
    </>
  );
}

export default TransferFilter;
