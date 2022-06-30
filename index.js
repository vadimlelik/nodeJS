// const performance = require('perf_hooks').performance
const fs = require('fs')
console.log('init')

setTimeout(()=>{
    console.log(performance.now(),'timer 0')
},100)

setImmediate(()=>{
    console.log('setImmediate')
})
fs.readFile(__dirname,()=>{
    console.log('File readed')
})
setTimeout(()=>{
    console.log(performance.now(),'timer 0')
},100)


console.log('Final')