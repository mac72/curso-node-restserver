import { Router } from 'express';
import { usuariosDelete, usuariosGet, usuariosPost, usuariosPut } from '../controllers/usuarios.controllers';

const router = Router();


router.get('/', usuariosGet);

router.put('/:id', usuariosPut );

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);


export default router;