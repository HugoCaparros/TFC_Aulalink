import express from 'express';
import cors from 'cors';

// Esta función prepara Express para usarlo en el proyecto
export const configurarServidor = () => {
  // Creamos la aplicación Express
  const app = express();

  // Permite recibir datos en formato JSON
  app.use(express.json());

  // Permite que el frontend se comunique con el backend
  app.use(cors());

  // Devolvemos la aplicación ya configurada
  return app;
};
