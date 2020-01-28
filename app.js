const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'borrar':
        let eliminado = porHacer.borrar(argv.descripcion);
        console.log(`Eliminado - ${ eliminado } |`, colors.red(argv.descripcion));
        break;
    case 'listar':
        let listado = porHacer.listar();
        for (let tarea of listado) {
            console.log('======== Por hacer ======='.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('=========================='.green);
        }
        break;
    case 'actualizar':
        let seCompleto = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(`======== ${ argv.descripcion } =======`);
        console.log('¿Se actualizó?:', seCompleto);
        break;
    default:
        console.log('comando no reconocido');
}