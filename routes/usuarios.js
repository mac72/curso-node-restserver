"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.json({
        msg: 'get API'
    });
});
router.put('/', (req, res) => {
    res.json({
        msg: 'put API'
    });
});
router.post('/', (req, res) => {
    res.json({
        msg: 'post API'
    });
});
router.delete('/', (req, res) => {
    res.json({
        msg: 'delete API'
    });
});
exports.default = router;
//# sourceMappingURL=usuarios.js.map