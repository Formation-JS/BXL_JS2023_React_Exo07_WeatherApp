import SearchBar from '../../components/search-bar/search-bar.jsx';

const WeatherApp = () => {

    const handleSearchCity = (city) => {
        console.log(city);
    };

    return (
        <>
            <SearchBar 
                label='Ville rechercher'
                placeholder='Bruxelles'
                onSearch={handleSearchCity}
                />
        
        </>
    )
};


export default WeatherApp;