import express from 'express';
import cors from 'cors';
import routes from '../routes/usuarios.routes';

class Server{
  private app: express.Application;
  private port: string;
  private usuariosPath:string;

  constructor(){
    this.app = express();
    this.port = process.env.PORT as string;
    this.usuariosPath = '/api/usuarios';
    //Middlewares
    this.middlewares();

    //rutas de mi aplicación
    this.routes();
  }

  middlewares(){
    //cosr
    this.app.use(cors());

    //Lectura y parseo del body

    this.app.use(express.json());

    //directorio publico
    this.app.use(express.static('public'));
  }

  routes(){
    this.app.use(this.usuariosPath,routes);

    
  }

  listen(){
    this.app.listen(this.port, () => {
      console.log(`Server listening at http://localhost:${this.port}`);
    });
  }

}

export default Server;