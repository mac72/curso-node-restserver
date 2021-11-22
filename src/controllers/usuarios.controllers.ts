import {Request, Response}  from 'express'

export const usuariosGet =(req: Request, res: Response) => {
  const query = req.query
  
  res.json({
    msg: 'get API - controlador',
    query
  });
}

export const usuariosPost =(req: Request, res: Response) => {
  const {nombre, edad} = req.body;
  res.json({
    msg: 'post API - controlador',
    nombre,
    edad
  });
}

export const usuariosPut =(req: Request, res: Response) => {
  const {id} = req.params;
  res.json({
    msg: 'put API - controlador',
    id
  });
}

export const usuariosDelete =(req: Request, res: Response) => {
  
  res.json({
    msg: 'delete API - controlador'
  });
}