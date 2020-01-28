const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Indica si la tarea esta ó no completada'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('borrar', 'Elimina un elemento', { descripcion })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
};