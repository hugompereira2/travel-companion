
import '../styles/List.scss';
import React, { useEffect } from 'react';
import Select from 'react-select';
import { RotatingLines } from 'react-loader-spinner'
import CardDetails from "./CardDetails";

const List = (props: any) => {

    const options = [
        { value: "restaurants", label: 'Restaurants' },
        { value: "hotels", label: 'Hotels' },
        { value: "attractions", label: 'Attractions' }
    ]

    const rating = [
        { value: 0, label: 'All' },
        { value: 30, label: 'Above 3.0' },
        { value: 40, label: 'Above 4.0' },
        { value: 45, label: 'Above 4.5' }
    ]

    const handleChangeType = (type: string) => {
        props.setOptions(type)
    };

    const handleChangeRatng = (type: number) => {
        props.setRating(type)
    };

    return (
        <div id="List">
            <div className="search_inputs">
                <h1>Restaurants, Hotels &amp; Attractions around you</h1>
                {props.loading
                    ? <div className="centered-loading">
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            width="96"
                            visible={true}
                        />
                    </div>
                    : <React.Fragment>
                        <form>
                            <label>Type</label>
                            <div className="inputs">
                                <Select onChange={(obj) => obj ? handleChangeType(obj.value) : ''} options={options} value={options.filter((e) => {
                                    return e.value === props.options;
                                })} />
                                <Select onChange={(obj) => obj ? handleChangeRatng(obj.value) : ''} placeholder="Rating" options={rating} defaultValue={rating[0]} />
                            </div>
                        </form>
                        <div className="card_list">
                            {
                                !props.places.length && !props.loading
                                ? "drag the map to start..."
                                : props.places?.map((place: any, index: number) => {
                                    return <CardDetails key={index} places={place} selected={place.location_id == props.selected} />
                                })
                            }
                        </div>
                    </React.Fragment>
                }
            </div>
        </div>
    )
}

export default List