//const fs = require('fs'); // Require para un proyecto propio de Node
//const fs = require('express'); Require para un paquete que se instale, no es propio de node pero son extenciones ya creadas
//const fs = require('./path'); Require para archivo que yo he creado en mi proyecto 


//const multiplicar = require('./multiplicar/multiplicar'); Para no tener q llamar la funcion de esta forma multiplicar.crearArchivo se llama asi:
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        console.log('Crear');
        console.log(argv.base);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', archivo))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Comando no reconocido');
        break;
}


//let base = 5;
/*let argv = process.argv[2];
let base = argv.split('=')[1]*/

/*crearArchivo(base)
    .then(archivo => console.log(archivo))
    .catch(e => console.log(e))*/