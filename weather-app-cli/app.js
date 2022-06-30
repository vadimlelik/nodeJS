#!/ust/bin/env node
import {getArgs} from './helpers/args.js'
import {printHelp} from "./services/log.services.js";


const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp()
        // Вывод help
    }
    if (args.s) {
        // сохранить город
    }
    if (args.t) {
        // сохранить токен
    }
    // вывести погоду
}

initCLI()