import PropTypes from 'prop-types';
import useSWR from 'swr';
import { fetchWeatherByCity } from '../../services/weather.service.js';

const weatherTempOptions = { style:'unit', unit: 'celsius', minimumFractionDigits: 1, maximumFractionDigits: 1 };

const WeatherData = ({ temp, desc, city, country, action, onAction}) => (
    <div>
        <p>{city} ({country}) {action && <span onClick={() => onAction()}>{action}</span>}</p>
        <p>Temperature : {temp.toLocaleString('fr-be', weatherTempOptions)}</p>
        <p>Météo : {desc}</p>
    </div>
);

const WeatherRequest = ({ city, action, onAction }) => {

    const { data, isLoading } = useSWR(
        `weather/${city}`, 
        () => fetchWeatherByCity(city),
        { revalidateOnFocus: false }
    );
    // Le "useSWR" cache l'utilisation de useState et de useEffect pour réaliser la requete

    return (
        <>
            {isLoading ? (
                <p>Chargement...</p>
            ) : data ? (
                <WeatherData {...data} action={action} onAction={onAction} />
            ) : (
                <p>Error :o</p>
            )}
        </>
    )
};

WeatherRequest.propTypes = {
    city: PropTypes.string.isRequired,
    onAction: PropTypes.func,
    action: PropTypes.string
};

WeatherRequest.defaultProps = {
    onAction: () => {}
};

export default WeatherRequest;