import api from './api.js'

const atmosphere = () => {
    const weather = document.querySelector('.weather');
    const pm = document.querySelector('.pm');
    const getSuccess = async (position) => {
        try {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            // const res = await api.fetchWeather(lat,lon);
            // console.log(res);
            // mapConv(37.5582860349463,126.90949184132235);
        } catch(e) {
            console.error(e);
        }
    }

    const getError = () => {    
        alert('대기 정보를 위해 위치정보를 제공해주세요.');
    }

    navigator.geolocation.getCurrentPosition(getSuccess, getError);
}

atmosphere();