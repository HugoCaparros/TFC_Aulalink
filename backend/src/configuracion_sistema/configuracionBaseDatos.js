// Importamos Firebase Admin (versión para backend)
import admin from 'firebase-admin';

// Importamos las variables del entorno (.env)
import { entorno } from './variablesEntorno.js';

// Evitamos inicializar Firebase más de una vez
if (!admin.apps.length) {
  // Iniciamos Firebase con las credenciales del .env
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: entorno.firebase?.projectId,
      clientEmail: entorno.firebase?.clientEmail,
      privateKey: entorno.firebase?.privateKey
    })
  });
}

// Creamos la conexión a Firestore
const db = admin.firestore();

// Exportamos la base de datos para usarla en otros archivos
export default db;
