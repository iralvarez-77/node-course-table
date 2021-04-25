const fs = require('fs');
const colors = require ('colors');

const addFile = async (b, l, h) => {

    try {
        
        let result = '',
            consola ='';

        for (let i = 1; i <= h; i++) {
            result += `${b} x ${i} = ${b*i}\n`;
            consola += `${b} ${'X'.cyan} ${i} ${'='.cyan} ${b*i}\n`;
        };
        
        if (l) {
            console.log('=================='.cyan);
            console.log('  Tabla del:',colors.red(b));
            console.log('=================='.cyan);
            console.log(consola);
        };

        fs.writeFileSync(`./salida/tabla-${b}.txt`, result);

        return `table-${b}.txt`;

    } catch (err) {
        throw err;
    }

};

module.exports = {
    addFile
};
