import express from 'express';
import cors from 'cors';

// Cargar variables de entorno
import { entorno } from './configuracion_sistema/variablesEntorno.js';

// Rutas
import rutasUsuarios from './rutas_api/rutasUsuarios.js';

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/ping', (req, res) => {
  res.json({ mensaje: 'Backend funcionando correctamente' });
});

// Rutas API
app.use('/api/usuarios', rutasUsuarios);

export default app;