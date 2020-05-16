const fs = require('fs'); // Require para un proyecto propio de Node
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor introducido NO es un numero');
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`.green);
        });
    });

}


let listarTabla = (base, limite) => {
    console.log('========================='.blue);
    console.log(`Tabla del ${base}`.blue);
    console.log('========================='.blue);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }


}

module.exports = {
    crearArchivo,
    listarTabla
}