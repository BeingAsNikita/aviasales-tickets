import React from 'react';
import './TicketsList.scss';
import Ticket from '../Ticket/Ticket';
import { filtration } from '../../utils/filters';

const TicketsList = ({ tickets }) => {
    const newTickets = tickets.slice(0,5).map(ticket => <Ticket {...ticket} key={ticket.price + ticket.carrier}/>)

   
    return (
    
        <ul>
            {
            
            newTickets
            }

        </ul>
    
    )
}

export default TicketsList;
