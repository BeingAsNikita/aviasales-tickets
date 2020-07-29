import React from 'react';
import './Ticket.scss';

const Ticket = ({ price, carrier, segments }) => {
    return (
        <li className="ticket">
            <div className="ticket__header">
                <div className="ticket__price">
                    {`${price} Р`}
                </div>

                <div className="ticket__logo">
                    <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt={`logo ${carrier}`} />
                </div>
            </div>

            <div className="ticket__wrap">
                <span className="ticket__subtitle">
                    {`${segments[0].origin} – ${segments[0].destination}`}
                </span>
                <span>10:45 – 08:00</span>

                <span className="ticket__subtitle">
                    {`${segments[1].origin} – ${segments[1].destination}`}
                </span>
                <span>11:20 – 00:50</span>
            </div>

            <div className="ticket__wrap">
                <span className="ticket__subtitle">В пути</span>
                <span>21ч 15м</span>

                <span className="ticket__subtitle">В пути</span>
                <span>13ч 30м</span>
            </div>

            <div className="ticket__wrap">
                <span className="ticket__subtitle">2 пересадки</span>
                <span>
                    {segments[0].stops.join()}
                </span>

                <span className="ticket__subtitle">1 пересадка</span>
                <span>
                {segments[1].stops.join()}
                </span>
            </div>
        </li>
    )
}

export default Ticket;
