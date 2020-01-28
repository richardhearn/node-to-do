const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {

        if (err)
            throw new Error('No se pudo guardar en la BD', err);
        else
            console.log(`Se guardó correctamente en la DB`);

    });
};

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};

const listar = () => {
    cargarDB();
    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

};

const borrar = (descripcion) => {
    cargarDB();
    const existe = listadoPorHacer.find(tarea => tarea.descripcion === descripcion);

    if (!existe) {
        return false;
    }

    listadoPorHacer = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    guardarDB();
    return true;
};

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
};