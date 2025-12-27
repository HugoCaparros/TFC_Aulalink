import { entorno } from './src/configuracion_sistema/variablesEntorno.js';
import app from './src/app.js';

app.listen(entorno.puerto, () => {
  console.log(`Servidor corriendo en puerto ${entorno.puerto}`);
});
