const { addFile } = require('./helpers/multiply');
const argv = require('./config/yargs');

require ('colors');

console.clear();

// const [ , , arg3 = 'base=5'  ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

addFile(argv.base, argv.listar, argv.hasta)
    .then (nameFile => console.log(nameFile.rainbow, 'Creada' ))
    .catch (err => console.log(err));
