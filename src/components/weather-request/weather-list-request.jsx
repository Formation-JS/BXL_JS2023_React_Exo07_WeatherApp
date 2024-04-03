import PropTypes from 'prop-types';
import WeatherRequest from './weather-request.jsx';

const WeatherListRequest = ({ cities, onRemove }) => {

    const citiesJSX = cities.map(
        city => <WeatherRequest key={city} 
                    city={city}
                    onAction={() => onRemove(city)}
                    action='❌'/>
    );

    return (
        <div>
            {citiesJSX}
        </div>
    )
}

WeatherListRequest.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.string)
};

WeatherListRequest.defaultProps = {
    cities: []
};

export default WeatherListRequest;