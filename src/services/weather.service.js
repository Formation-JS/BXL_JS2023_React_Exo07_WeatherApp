import axios from 'axios';

export const fetchWeatherByCity = async (city) => {

    // Requete AJAX (via Axios)
    const response = await axios.get('weather', {
        baseURL: import.meta.env.VITE_WEATHER_BASE_URL,
        params: {
            q: city,
            units: 'metric',
            lang: 'fr',
            appid: import.meta.env.VITE_WEATHER_KEY,
        }
    });

    // Mapping
    const data = {
        temp: response.data.main.temp,
        desc: response.data.weather.map(w => w.description).join(' / '),
        city: response.data.name,
        country: response.data.sys.country
    }

    // Return...
    return data;
};
