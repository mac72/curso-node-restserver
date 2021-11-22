"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controllers_1 = require("../controllers/usuarios.controllers");
const router = (0, express_1.Router)();
router.get('/', usuarios_controllers_1.usuariosGet);
router.put('/:id', usuarios_controllers_1.usuariosPut);
router.post('/', usuarios_controllers_1.usuariosPost);
router.delete('/', usuarios_controllers_1.usuariosDelete);
exports.default = router;
//# sourceMappingURL=usuarios.routes.js.map