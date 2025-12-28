// Importamos el puerto desde las variables de entorno (.env)
import { entorno } from './src/configuracion_sistema/variablesEntorno.js';

// Importamos la aplicación Express ya preparada
import app from './src/app.js';

// Arrancamos el servidor y lo dejamos escuchando peticiones
app.listen(entorno.puerto, () => {
  // Mensaje para saber que el servidor está funcionando
  console.log(`Servidor corriendo en puerto ${entorno.puerto}`);
});
