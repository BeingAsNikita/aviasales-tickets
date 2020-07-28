import React from 'react';
import './TransferFilter.scss';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';

const filters = [
    {
        name: 'all',
        type: 'checkbox',
        text: 'Все'
    },
    {
        name: 'withoutTransfers',
        type: 'checkbox',
        text: 'Без пересадок'
    },
    {
        name: 'oneTransfer',
        type: 'checkbox',
        text: '1 пересадка'
    },
    {
        name: 'twoTransfers',
        type: 'checkbox',
        text: '2 пересадки'
    },
    {
        name: 'threeTransfers',
        type: 'checkbox',
        text: '3 пересадки'
    }
]

const TransferFilter = () => {
  return (
    <>  
      <div className="transferFilter">
        <p className="transferFilter__title">Количество пересадок</p>
        <ul>
            {filters.map(filter => <CustomCheckbox {...filter} key={filter.name}/> )}
        </ul>
      </div>
    </>
  );
}

export default TransferFilter;
