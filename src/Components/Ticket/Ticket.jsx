import React from 'react';
import './Ticket.scss';
import { getTime } from '../../utils/getTime';

const Ticket = ({ price, carrier, segments }) => {



    let timeIn = getTime(segments[0].date, segments[0].duration);
    let timeOut = getTime(segments[1].date, segments[1].duration);



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

                    <div className="ticket__inner">

                        <span className="ticket__subtitle">
                            {`${segments[0].origin} – ${segments[0].destination}`}
                        </span>

                        <span>
                            {`
                    ${timeIn.departureHour}:${timeIn.departureMinutes} – 
                    ${timeIn.arrivalHour}:${timeIn.arrivalMinutes} 
                    `}
                        </span>

                    </div>
                    <div className="ticket__inner">
                        <span className="ticket__subtitle">В пути</span>
                        <span>
                            {`
                        ${timeIn.durationHours}ч ${timeIn.durationMinutes}м
                    `}
                        </span>
                    </div>

                    <div className="ticket__inner">


                        <span className="ticket__subtitle">2 пересадки</span>
                        <span>
                            {segments[0].stops.join()}
                        </span>
                    </div>



                </div>

                <div className="ticket__wrap">
                    <div className="ticket__inner">
                        <span className="ticket__subtitle">
                            {`${segments[1].origin} – ${segments[1].destination}`}
                        </span>
                        <span>
                            {`
                    ${timeOut.departureHour}:${timeOut.departureMinutes} – 
                    ${timeOut.arrivalHour}:${timeOut.arrivalMinutes} 
                    `}
                        </span>
                    </div>

                    <div className="ticket__inner">
                        <span className="ticket__subtitle">В пути</span>
                        <span>
                            {`
                        ${timeOut.durationHours}ч ${timeOut.durationMinutes}м
                    `}
                        </span>
                    </div>

                    <div className="ticket__inner">
                        <span className="ticket__subtitle">1 пересадка</span>
                        <span>
                            {segments[1].stops.join()}
                        </span>
                    </div>


                </div>


            </li>
    )
}

export default Ticket;
