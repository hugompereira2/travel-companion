import React, { useEffect, useRef } from 'react'
import '../styles/CardDetails.scss'
import { ReactComponent as Search } from '../assets/location_icon.svg'
import { ReactComponent as Phone } from '../assets/phone_icon.svg'
import GenericPhoto from '../assets/generic_restaurant.jpg'

const CardDetails = (props: any) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (props.selected) {
            if (props.selected) {
                cardRef?.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "start"
                });
            }
        }
    }, [props.selected])

    return (
        <div id="CardDetails" ref={cardRef}>
            <img src={props.places.photo ? props.places.photo.images.medium.url : GenericPhoto} alt={props.places.name} />
            <div className="description">
                <h4>{props.places.name}</h4>
                <div className="card_row">
                    <span>Price</span>
                    <span>{props.places.price_level}</span>
                </div>
                <div className="card_row">
                    <span>Ranking</span>
                    <span>{props.places.ranking}</span>
                </div>
                <div className="card_row">
                    <Phone width={25} />
                    <span>{props.places.phone}</span>
                </div>
                <div className="card_row">
                    <Search className="svg-margin" width={40} />
                    <span>{props.places.address}</span>
                </div>
                <div className="button_action">
                    <button onClick={() => window.open(props.places.web_url, '_blank')}>Travel Advisor</button>
                    <button onClick={() => window.open(props.places.website, '_blank')}>Website</button>
                </div>
            </div>
        </div>
    )
}

export default CardDetails