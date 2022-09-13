
import '../styles/List.scss';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import CardDetails from "./CardDetails";

const List = (props: any) => {
    const [type, setType] = useState('');
    const [rating, setRating] = useState<number>();

    const options = [
        { value: 'Restaurants', label: 'Restaurants' },
        { value: 'Hotels', label: 'Hotels' },
        { value: 'Attractions', label: 'Attractions' }
    ]

    const Rating = [
        { value: 0, label: 'All' },
        { value: 30, label: 'Above 3.0' },
        { value: 40, label: 'Above 4.0' },
        { value: 45, label: 'Above 4.5' }
    ]

    const handleChangeType = (type: string) => {
        setType(type)
    };

    const handleChangeRatng = (type: number) => {
        setRating(type)
    };

    // useEffect(() => {
    //     console.log(props.places)
    // }, [])

    return (
        <div id="List">
            <div className="search_inputs">
                <h1>Restaurants, Hotels &amp; Attractions around you</h1>
                <form>
                    <label>Type</label>
                    <div className="inputs">
                        <Select onChange={(obj) => obj ? handleChangeType(obj.value) : ''} options={options} defaultValue={options[0]} />
                        <Select onChange={(obj) => obj ? handleChangeRatng(obj.value) : ''} placeholder="Rating" options={Rating} />
                    </div>
                </form>
                <div className="card_list">
                    {
                        props.places?.map((place: any, index: number) => {
                            return <CardDetails key={index} places={place} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default List