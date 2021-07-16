import axios from 'axios'


const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_key = '2544b112700d507b8a1def92a2ffef4e';

export const fetchWeather = async(query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_key,
        }
    });

    return data;

}