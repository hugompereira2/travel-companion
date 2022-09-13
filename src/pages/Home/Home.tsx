
import Header from "../../components/Header";
import '../../styles/Home.scss'
import { getPlacesData } from "../../api";
import GoogleMaps from "../../components/GoogleMaps";
import List from "../../components/List";
import { useEffect, useState } from "react";

const Home = () => {
    const [places, setPlaces] = useState<any>([]);
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
    const [loaded, setLoaded] = useState(false);
    const [bounds, setBounds] = useState({
        ne: { lat: 0, lng: 0 },
        sw: { lat: 0, lng: 0 }
    });

    const fetchData = async () => {
        const data = await getPlacesData(bounds.sw, bounds.ne);
        setPlaces(data);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
            setLoaded(true);
        })
    }, []);

    useEffect(() => {
        fetchData();
    }, [coordinates, bounds]);

    return (
        <div id="Home">
            <Header />
            <div className="main">
                <List places={places}/>
                {
                    loaded ?
                        <GoogleMaps
                            setCoordinates={setCoordinates}
                            setBounds={setBounds}
                            coordinates={coordinates}
                            places={places}
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
