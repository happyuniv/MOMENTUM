import api from "./api.js";

const weather = () => {
  const $weather = document.querySelector(".weather");

  const getSuccess = async (position) => {
    try {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const weatherData = await api.fetchWeather(lat, lon);
      const cityData = await api.fetchCityName(lat, lon);

      $weather.innerHTML = `
      <div class=temperature>${Math.round(weatherData.current.temp - 273.15)}˚
        <div class=sub-temperature>${`${Math.round(
          weatherData.daily[0].temp.min - 273.15
        )} / ${Math.round(weatherData.daily[0].temp.max - 273.15)} `}</div>
       </div>
      <div class=weather-info>
        <img class=weather-icon src='http://openweathermap.org/img/wn/${
          weatherData.current.weather[0].icon
        }@2x.png' />
        <div class=weather-location>${cityData[0].local_names.ko}</div>
      </div>    
      `;
    } catch (e) {
      console.error(e);
    }
  };

  const getError = () => {
    alert("대기 정보를 위해 위치정보를 제공해주세요.");
  };

  navigator.geolocation.getCurrentPosition(getSuccess, getError);
};

weather();
