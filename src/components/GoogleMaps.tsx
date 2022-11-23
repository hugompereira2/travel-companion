import { GoogleMap, Marker, InfoWindow, LoadScript } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import '../styles/GoogleMaps.scss'
import imgRestaurant from '../assets/generic_restaurant.jpg'
import locationIcon from '../assets/t_icon.svg'

interface GoogleMapsType {
    setCoordinates: Function,
    setSelected: Function,
    setBounds: Function,
    coordinates: { lat: number, lng: number },
    places: [],
}

const GoogleMaps = (props: GoogleMapsType) => {
    const [activeMarker, setActiveMarker] = useState<String>('');
    const [mapRef, setMapRef] = useState<any>(null);

    const containerStyle = {
        width: "100%",
        height: "100%",
        minWidth: "460px"
    };

    const handleOnLoad = (map:any) => {
        setMapRef(map);
        
    } 

    const handleActiveMarker = (marker: String) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const handleMapChange = () => {
        if (mapRef) {
            props.setCoordinates({ lat: mapRef.center.lat(), lng: mapRef.center.lng() })
            props.setBounds({ ne: mapRef.getBounds().getNorthEast().toJSON(), sw: mapRef.getBounds().getSouthWest().toJSON() })
        }
    }

    return (
        <React.Fragment>
            <LoadScript googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_KEY}`} mapIds={[`${process.env.REACT_APP_GOOGLE_MAPS_ID}`]}>
                <GoogleMap
                    id={process.env.REACT_APP_GOOGLE_MAPS_ID}
                    onLoad={map => handleOnLoad(map)}
                    options={{ mapId: `${process.env.REACT_APP_GOOGLE_MAPS_ID}` }}
                    mapContainerStyle={containerStyle}
                    onDragEnd={handleMapChange}
                    center={props.coordinates}
                    zoom={15}
                >
                    {
                        props.places && props.places.map((e: any, index) => (
                            <Marker
                                icon={{
                                    url: locationIcon,
                                    scaledSize: new window.google.maps.Size(40, 40)
                                }}
                                key={index}
                                position={{ lat: Number(e.latitude), lng: Number(e.longitude) }}
                                onMouseOver={() => handleActiveMarker(e.name)}
                                onMouseOut={() => handleActiveMarker('')}
                                onClick={() => props.setSelected(e.location_id)}
                            >
                                {activeMarker === e.name && e.latitude && e.longitude ? (
                                    <InfoWindow position={{ lat: Number(e.latitude), lng: Number(e.longitude) }} onCloseClick={() => setActiveMarker('')}>
                                        <div className="window">
                                            <img src={e.photo ? e.photo.images.medium.url : imgRestaurant} alt={e.name} />
                                            <span>{e.name}</span>
                                        </div>
                                    </InfoWindow>
                                ) : null}
                            </Marker>
                        ))
                    }
                </GoogleMap>
            </LoadScript>
        </React.Fragment>
    )
}

export default GoogleMaps