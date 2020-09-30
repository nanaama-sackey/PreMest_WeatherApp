import React from 'react';

const id = '297927cc5a46678f2f768a8e44195f7b'
const website = 'https://api.openweathermap.org/data/2.5/'

function App() {
    const [ query, setQuery ] = React.useState('');
    const [ weather, setWeather ] = React.useState({});

    function handleChange(event){
      setQuery(event.target.value)
    }

    const handleSearch = (event) => {
      //event.preventDefault();

      fetch(`${website}weather?q=${query}&units=metric&APPID=${id}`)
      .then((results) => results.json())
      .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
      });
    }

  return (
  
    <div className="App">
      <h1>Welcome to Smally's Weather App</h1>

      <div className='search-bar'>
        <input
          type='search'
          value= {query}
          placeholder='Type a city to look up the weather...'
          onKeyPress= { event => { if(event.key === 'Enter'){handleSearch(event)}}}
          onChange= { event => { handleChange(event) }}
        />

        <input
          type='submit'
          value='Get Forecast'
          className = 'search-btn'
          //onClick={handleSearch}
        />
      </div>
    

      
      {typeof weather.main != "undefined" ? (
          <div className="">
            <div className="">
              <span>{weather.name}, {weather.sys.country} </span>
            </div>
            <div className="API-Results">
              {/* <div className="temperature">
                <h3> Temperature: <br/> <span>{Math.round(weather.main.temp)}°C</span> </h3>
              </div> */}
              <div className="weather">
                <h3> Weather: <br/> <span>{weather.weather[0].main}</span> </h3>
                <h3> Description: <br/> <span>{weather.weather[0].description}</span> </h3>
                {/* <h3> Icon: <br/> <span>{weather.weather[0].icon}</span> </h3>
             */}

              </div>
              <div className="humdiity">
                <h3> Humiditiy: <br/> <span>{weather.main.humidity}%</span> </h3>
              </div>

              <div className="pressure">
                <h3> Pressure: <br/> <span>{(weather.main.pressure)}mb</span> </h3>
              </div>
              
              <div className="temperature">
                <h3> Max Temperature: <br/> <span>{Math.round(weather.main.temp_max)}°C</span> </h3>
                <h3> Min Temperature: <br/> <span>{Math.round(weather.main.temp_min)}°C</span> </h3>
                <h3> Temperature: <br/> <span>{Math.round(weather.main.temp)}°C</span> </h3>
              </div>

              <div className = "system">
              <h3> Country: <br/> {weather.sys.country} </h3>
              {/* <h3> Sunrise: <br/> {weather.sys.sunrise} </h3> */}
              </div>


              <div className ='wind'>
              <h3> Wind Degree: <br/> <span>{weather.wind.deg}</span> </h3>
              <h3> Wind Speed: <br/> <span>{weather.wind.speed}km/h</span> </h3>
              <h3> Icon: <br/> <span>{weather.weather[0].icon}</span> </h3>
              {/* //<img src={"http://openweathermap.org/img/wn/" + {weather[0].description} + "@2x.png"}/>
    */}
              </div>

            </div>
          </div>
        ) : null }
    </div>
    
  );
}

export default App;
