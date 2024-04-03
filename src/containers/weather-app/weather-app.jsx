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
    };

    const handleRemoveToFav = (city) => {
        setFav(fav => fav.filter(f => f !== city))
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
                <WeatherRequest city={city} 
                    onAction={handleAddToFav} 
                    action='🌟'/>
            )}

            <h2>Liste des villes sauvegardés</h2>
            <WeatherListRequest 
                cities={fav}
                onRemove={handleRemoveToFav}
            />
        </>
    )
};


export default WeatherApp;