
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'Multiplica por el número deseado'
    })
    .check((argv, options) =>{
        if (isNaN(argv.base)){
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .option('l', {
        alias:'listar',
        type:'boolean',
        default: false,
        describe:'Imprime en consola la tabla de multiplicar'
    })
    .option('h', {
        alias:'hasta',
        type:'number',
        default: 10,
        describe: 'multiplica hasta determinado número seleccionado'
    })
   
        .argv;

module.exports = argv;