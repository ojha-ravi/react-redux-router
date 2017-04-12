import axios from "axios";

const API_KEY = "1e113c9de58edafeb27bd8c5388fbf2d";

const FETCH_WEATHER = "FETCH_WEATHER";
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},in`;
	const request = axios.get(url).then();

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}
