import express, { Application } from 'express';

import usuarioRoutes from '../routes/usuarios';

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    auth: '/api/auth',
    historialPrecios: '/api/historialPrecios',
    historialPreciosDetalle: '/api/historialPreciosDetalle',
    buscar: '/api/buscar',
    categorias: '/api/categorias',
    marcaAutos: '/api/marcaAutos',
    marcaAutosModelos: '/api/marcaAutoModelos',
    marcaProductos: '/api/marcaProductos',
    productos: '/api/productos',
    proveedores: '/api/proveedores',
    usuarios: '/api/usuarios',
    uploads: '/api/uploads'
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8080';

    // Conectar a base de datos
    /*         this.conectarDB(); */
    // Middlewares */
    this.middlewares();
    // Rutas de mi aplicación
    this.routes();
  }

  middlewares() {
    // CORS
    /*         this.app.use(cors());
        // Lectura y Parseo
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        // Directorio publico
        this.app.use(express.static("public"));
        // Fileupload - Carga de Archivos
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: "/tmp/",
            createParentPath: true
        })); */
  }

  routes() {
    /*         this.app.use(this.path.auth, authRoute);
                this.app.use(this.path.historialPrecios, historialPreciosRoute);
                this.app.use(this.path.historialPreciosDetalle, historialPreciosDetalleRoute);
                this.app.use(this.path.buscar, buscarRoute);
                this.app.use(this.path.categorias, categoriasRoute);
                this.app.use(this.path.productos, productosRoute);
                this.app.use(this.path.proveedores, proveedoresRoute)
                this.app.use(this.path.marcaProductos, marcaProductosRoute);
                this.app.use(this.path.marcaAutos, marcaAutosRoute);
                this.app.use(this.path.marcaAutosModelos, marcaAutosModelosRoute); */
    this.app.use(this.apiPaths.usuarios, usuarioRoutes);
    //this.app.use(this.path.uploads, uploadsRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en el puerto: ', this.port);
    });
  }
}

export default Server;
