import React from 'react';
import './ReservationPopup.css'

interface ReservationPopupProps {
    visible: boolean,
    available: boolean,
    id: string,
    close: () => void
}


export default class ReservationPopup extends React.Component <ReservationPopupProps> {
    
    render() {
        if (this.props.visible) {
            return (
                <div className='background popup'>
                    <div className='popup'>
                        <h2>{this.props.available? 'Reservation successful' : 'Reservation failed'}</h2>
                        <p>{this.props.available? `Your booking ID is: ${this.props.id}` : 'Please try another day'}</p>
                        <button onClick={this.props.close}>Ok, got it!</button>
                    </div>
                </div>
            )
        } else {return null}
    }
}