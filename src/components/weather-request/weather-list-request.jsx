import PropTypes from 'prop-types';
import WeatherRequest from './weather-request.jsx';

const WeatherListRequest = ({ cities }) => {

    const citiesJSX = cities.map(
        city => <WeatherRequest key={city} city={city} />
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