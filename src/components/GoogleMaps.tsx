import { GoogleMap, Marker, useJsApiLoader, InfoWindow } from "@react-google-maps/api";
import React, { useState } from "react";
import '../styles/GoogleMaps.scss'
import imgRestaurant from '../assets/generic_restaurant.jpg'
import locationIcon from '../assets/black_dot_icon.svg'

interface GoogleMapsType {
    setCoordinates: Function,
    setBounds: Function,
    coordinates: { lat: number, lng: number },
    places: [],
}

const GoogleMaps = (props: GoogleMapsType) => {
    const [activeMarker, setActiveMarker] = useState<String>('');
    const [mapRef, setMapRef] = useState<any>(null);
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY ? process.env.REACT_APP_GOOGLE_MAPS_KEY : ""
    });

    const containerStyle = {
        width: "100%",
        height: "100%"
    };

    const handleActiveMarker = (marker: String) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const handleMapChange = () => {
        if (mapRef) {
            console.log(mapRef)
            console.log(mapRef.getBounds())
            props.setCoordinates({ lat: mapRef.center.lat(), lng: mapRef.center.lng() })
            props.setBounds({ ne: mapRef.getBounds().getNorthEast().toJSON(), sw: mapRef.getBounds().getSouthWest().toJSON() })
        }
    }

    return (
        <React.Fragment>
            {isLoaded && (
                <GoogleMap
                    // Store a reference to the google map instance in state
                    onLoad={map => setMapRef(map)}
                    mapContainerStyle={containerStyle}
                    // Save the current center position in state
                    onDragEnd={handleMapChange}
                    onClick={(e) => console.log(e)}
                    // Save the user's map click position
                    center={props.coordinates}
                    zoom={15}
                >
                    {
                        props.places && props.places.map((e: any, index) => (
                            <Marker
                                icon={locationIcon}
                                key={index}
                                position={{ lat: parseInt(e.latitude), lng: parseInt(e.longitude) }}
                                onMouseOver={() => handleActiveMarker(e.name)}
                                onMouseOut={() => handleActiveMarker('')}
                            >
                                {activeMarker === e.name ? (
                                    <InfoWindow onCloseClick={() => setActiveMarker('')}>
                                        <div className="window">
                                            <img src={imgRestaurant} alt={e.name} />
                                            <span>{e.name}</span>
                                        </div>
                                    </InfoWindow>
                                ) : null}
                            </Marker>
                        ))
                    }
                </GoogleMap>
            )
            }
        </React.Fragment>
    )
}

export default GoogleMaps