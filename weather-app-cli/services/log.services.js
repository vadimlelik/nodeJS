import chalk from 'chalk';
import dedent from "dedent-js";


const printError = (error) => {
    console.log(`${chalk.bgRed('Error')} ${error}`)
}
const printSuccess = (error) => {
    console.log(`${chalk.green('Success')} ${error}`)
}

const printHelp = () => {
    console.log(dedent(`${chalk.bgCyan('HELP')} 
        Без параметров - вывод погоды
        
        -s [CITY] для установки города
        -h [HELP] для вывода помощи
        -t [API_KEY] для сохранение токена`))

}

export {printError, printSuccess,printHelp}