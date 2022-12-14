const UNSPLASH_API_KEY =
  "b491e86a6957b396f44f1e15e41d3d242e17aa982607f161b95defd195c7f4dd";
const WEATHER_API_KEY = "63087b5ebab3d47ccffa86234487673b";

const respondRequest = (res) => {
  if (res.status === 200) return res.json();
  else throw new Error("ERROR");
};

const api = {
  fetchBackground: async () => {
    const res = await fetch(
      `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}&query=landscape&orientation=landscape`
    );
    return respondRequest(res);
  },

  fetchCityName: async (lat, lon) => {
    const res = await fetch(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${WEATHER_API_KEY}`
    );
    return respondRequest(res);
  },
  fetchWeather: async (lat, lon) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&lang=kr`
    );
    return respondRequest(res);
  },
};

export default api;
