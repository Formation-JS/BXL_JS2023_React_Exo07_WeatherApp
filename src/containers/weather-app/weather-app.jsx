import { useState } from 'react';
import SearchBar from '../../components/search-bar/search-bar.jsx';
import WeatherRequest from '../../components/weather-request/weather-request.jsx';

const WeatherApp = () => {

    const [city, setCity] = useState(null); 

    const handleSearchCity = (city) => {
        setCity(city.toLowerCase());
    };

    return (
        <>
            <SearchBar 
                label='Ville rechercher'
                placeholder='Bruxelles'
                onSearch={handleSearchCity}
                />

            {city && (
                <WeatherRequest city={city} />
            )}
        </>
    )
};


export default WeatherApp;