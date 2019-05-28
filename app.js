// Requires

const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); // Llamar el archivo js // Destructuración

let comando = argv._[0]; // Obtener el comando.
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}


//  let base = 7;

// console.log(process.argv);

let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

console.log('Límite', argv.limite);
// console.log(argv2);