import React from 'react';

const id = 'c1e02e8db36a1accbeb63619c7d1d6e8'
const website = 'https://api.openweathermap.org/data/2.5/'

function App() {
    const [ query, setQuery ] = React.useState('');
    const [ weather, setWeather ] = React.useState({});

    const handleSearch = (e) => {
      e.preventDefault();

      fetch(`${website}weather?q=${query}&units=metric&APPID=${id}`)
      .then((res) => res.json())
      .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
      });
    }

  return (
    <div className="App">
      <div className='search-bar'>
        <input
          type='search'
          value={query}
          placeholder='search...'
          onChange={ e => setQuery(e.target.value)}
        />
        <input
          type='submit'
          value='Search'
          onClick={handleSearch}
        />
      </div>
      {typeof weather.main != "undefined" ? (
          <div className="">
            <div className="">
              <span>{weather.name}, {weather.sys.country} </span>
            </div>
            <div className="">
              <div className="">
                <h3> temperature <br/> <span>{Math.round(weather.main.temp)}°C</span> </h3>
              </div>
              <div className="">
                <h3> weather <br/> <span>{weather.weather[0].main}</span> </h3>
              </div>
            </div>
          </div>
        ) : null }
    </div>
  );
}

export default App;
