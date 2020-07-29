import React from 'react';
import './TicketsList.scss';
import Ticket from '../Ticket/Ticket';

const TicketsList = ({ tickets }) => {
    return (
        <ul>
            {
            tickets.slice(0,5).map(ticket => <Ticket {...ticket} key={ticket.price + ticket.carrier}/>)
            
            }

        </ul>
    )
}

export default TicketsList;
