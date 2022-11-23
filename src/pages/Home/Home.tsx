
import Header from "../../components/Header";
import '../../styles/Home.scss'
import { getPlacesData } from "../../api";
import GoogleMaps from "../../components/GoogleMaps";
import List from "../../components/List";
import { useEffect, useState } from "react";

const Home = () => {
    const [places, setPlaces] = useState<any>([]);
    const [filteredPlaces, setFilteredPlaces] = useState<any>([]);
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
    const [selected, setSelected] = useState("");
    const [options, setOptions] = useState("restaurants");
    const [rating, setRating] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [searching, setSearching] = useState(false);
    const [bounds, setBounds] = useState({
        ne: { lat: 0, lng: 0 },
        sw: { lat: 0, lng: 0 }
    });

    const fetchData = async () => {
        const data = await getPlacesData(options, bounds.sw, bounds.ne);
        setPlaces(data.filter((place:any) => place.ranking && place.rating));
        setSearching(false);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
            setLoaded(true);
        })
    }, []);

    useEffect(() => {
        const filtered = places.filter((place: any) => Number(String(place.rating).replace(".", "")) > rating)

        setFilteredPlaces(filtered);
    }, [rating]);

    useEffect(() => {
        setSearching(true);
        fetchData();
        setFilteredPlaces([]);
    }, [coordinates, bounds, options]);

    return (
        <div id="Home">
            <Header />
            <div className="main">
                <List places={filteredPlaces.length ? filteredPlaces : places} selected={selected} options={options} setOptions={setOptions} setRating={setRating} loading={searching}/>
                {
                    loaded ?
                        <GoogleMaps
                            setCoordinates={setCoordinates}
                            setBounds={setBounds}
                            coordinates={coordinates}
                            places={filteredPlaces.length ? filteredPlaces : places}
                            setSelected={setSelected}
                        />
                        :
                        <div className="alert">
                            <p className="alert-message">"allow" to launch google maps</p>
                        </div>
                }
            </div>
        </div>
    );
}

export default Home;
