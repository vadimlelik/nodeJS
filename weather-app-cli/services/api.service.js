import axios from 'axios'
// import https from 'https'
import { getKeyValue, TOKEN_DICTIONARY } from './storage.services.js'

// const key = '391c446fa1a351a02163bb32668669a6'

const getWeather = async (city) => {
	const token = await getKeyValue(TOKEN_DICTIONARY.token)
	if (!token) {
		throw new Error('не задан ключ API, задайте его черз команду -t [API_KEY]')
	}
	const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
		params: {
			q: city,
			appid: token,
			lang: 'ru',
			units: 'metric'

		}
	})
	return data
	// const url = new URL('https://api.openweathermap.org/data/2.5/weather')
	// url.searchParams.append('q', city)
	// url.searchParams.append('appid', token)
	// url.searchParams.append('lang', 'ru')
	// url.searchParams.append('units', 'metric')



	// https.get(url, (response) => {

	// 	let res = ''
	// 	response.on('data', (chunk) => {
	// 		res += chunk
	// 	})

	// 	response.on('end', () => {
	// 		console.log(res);
	// 	})

	// })
}
export { getWeather }