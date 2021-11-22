"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosDelete = exports.usuariosPut = exports.usuariosPost = exports.usuariosGet = void 0;
const usuariosGet = (req, res) => {
    const query = req.query;
    res.json({
        msg: 'get API - controlador',
        query
    });
};
exports.usuariosGet = usuariosGet;
const usuariosPost = (req, res) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
};
exports.usuariosPost = usuariosPost;
const usuariosPut = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'put API - controlador',
        id
    });
};
exports.usuariosPut = usuariosPut;
const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    });
};
exports.usuariosDelete = usuariosDelete;
//# sourceMappingURL=usuarios.controllers.js.map