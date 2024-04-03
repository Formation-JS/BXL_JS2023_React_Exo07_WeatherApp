import { useState } from 'react';
import SearchBar from '../../components/search-bar/search-bar.jsx';
import WeatherRequest from '../../components/weather-request/weather-request.jsx';
import WeatherListRequest from '../../components/weather-request/weather-list-request.jsx';

const WeatherApp = () => {

    const [city, setCity] = useState(null);
    const [fav, setFav] = useState([]);

    const handleSearchCity = (city) => {
        setCity(city.toLowerCase());
    };

    const handleAddToFav = () => {
        setFav(fav => {
            if(!fav.includes(city)) {
                return [city, ...fav];
            }
            return fav;
        });
    }

    return (
        <>
            <h2>Recherche la météo d'une ville</h2>
            <SearchBar
                label='Ville rechercher'
                placeholder='Bruxelles'
                onSearch={handleSearchCity}
            />

            {city && (
                <>
                    <WeatherRequest city={city} />
                    <button onClick={handleAddToFav}
                        disabled={fav.includes(city)}>
                        Ajouter aux favoris !
                    </button>
                </>
            )}

            <h2>Liste des villes sauvegardés</h2>
            <WeatherListRequest cities={fav} />
        </>
    )
};


export default WeatherApp;