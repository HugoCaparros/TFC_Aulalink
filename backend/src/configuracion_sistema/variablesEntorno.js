import dotenv from 'dotenv';

// Cargamos el archivo .env
dotenv.config({ path: '.env' });

// Guardamos las variables del entorno en un solo objeto
export const entorno = {
  // Puerto del servidor
  puerto: process.env.PORT || 3000,

  // Datos necesarios para Firebase
  firebase: {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  }
};
