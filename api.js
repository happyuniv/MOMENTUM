const UNSPLASH_API_KEY = "b491e86a6957b396f44f1e15e41d3d242e17aa982607f161b95defd195c7f4dd";
const UNSPLASH_URL = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}&query=landscape&orientation=landscape`;

const WEATHER_API_KEY = "63087b5ebab3d47ccffa86234487673b";

const api = {
    
    fetchBackground: async () => {    
        const data = await fetch(UNSPLASH_URL);
        const res = await data.json();
        return res;
    },

    fetchWeather: async (lat,lon) => {
        const WEATHER_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${WEATHER_API_KEY}`;
        // const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;
        // const WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=1&appid=${WEATHER_API_KEY}`;
        const data = await fetch(WEATHER_URL);
        const res = await data.json();
        return res;
    }
}

export default api;