#!/ust/bin/env node
import { getArgs } from './helpers/args.js'
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError } from "./services/log.services.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.services.js";


const saveToken = async (token) => {
    console.log(token, 'token');
    if (!token.length) {
        printError('Не передан token')
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess('Токен сохранён')
    } catch (e) {
        printError(e.message)
    }


}


const getForcast = async () => {
    try {
        const weather = await getWeather('minsk')
        console.log(weather);
    } catch (error) {
        if (e?.response?.status === 404) {
            printError('Не верно указан Город')
        } else if (e?.response?.status === 401) {
            printError('Не верно указан Token')
        } else {
            printError(e.message)
        }

    }

}

const initCLI = () => {
    const args = getArgs(process.argv)
    console.log(process.env);
    if (args.h) {
        // Вывод help
        printHelp()
    }
    if (args.s) {
        // сохранить город
        return
    }
    if (args.t) {
        return saveToken(args.t)
        // сохранить токен
    }

    // Вывод Погоды
    // getForcast()
}

initCLI()