#!/ust/bin/env node
import {getArgs} from './helpers/args.js'
import {printHelp,printSuccess,printError} from "./services/log.services.js";
import {saveKeyValue} from "./services/storage.services.js";


const saveToken= async (token)=>{
    try{
        await saveKeyValue('token',token)
        printSuccess('Токен сохранён')
    }  catch (e){
        printError(e.meassage)
    }


}

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        // Вывод help
        printHelp()
    }
    if (args.s) {
        // сохранить город
    }
    if (args.t) {
        return  saveToken(args.t )
        // сохранить токен
    }
    // вывести погоду
}

initCLI()