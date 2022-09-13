import React from 'react'
import '../styles/CardDetails.scss'
import { ReactComponent as Search } from '../assets/location_icon.svg'
import { ReactComponent as Phone } from '../assets/phone_icon.svg'
import GenericPhoto from '../assets/generic_restaurant.jpg'

const CardDetails = ({ places }: any) => {

    return (
        <div id="CardDetails">
            <img src={places.photo ? places.photo.images.medium.url : GenericPhoto} alt={places.name} />
            <div className="description">
                <h4>{places.name}</h4>
                <div className="card_row">
                    <span>Price</span>
                    <span>{places.price_level}</span>
                </div>
                <div className="card_row">
                    <span>Ranking</span>
                    <span>{places.ranking}</span>
                </div>
                <div className="card_row">
                    <Phone width={25} />
                    <span>{places.phone}</span>
                </div>
                <div className="card_row">
                    <Search className="svg-margin" width={40} />
                    <span>{places.address}</span>
                </div>
                <div className="button_action">
                    <button onClick={() => window.open(places.web_url, '_blank')}>Travel Advisor</button>
                    <button onClick={() => window.open(places.website, '_blank')}>Website</button>
                </div>
            </div>
        </div>
    )
}

export default CardDetails