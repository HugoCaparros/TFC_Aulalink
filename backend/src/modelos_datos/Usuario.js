// Importamos la conexión a Firestore
import db from '../configuracion_sistema/configuracionBaseDatos.js';

// Usamos la colección "usuarios" de Firestore
const coleccionUsuarios = db.collection('usuarios');

/**
 * Crear un usuario nuevo en Firestore
 */
export const crearUsuario = async (datosUsuario) => {
  // Guardamos el usuario en la colección
  const docRef = await coleccionUsuarios.add(datosUsuario);

  // Devolvemos el id del usuario creado
  return docRef.id;
};

/**
 * Buscar un usuario por su email
 */
export const buscarUsuarioPorEmail = async (email) => {
  // Buscamos usuarios con ese email
  const snapshot = await coleccionUsuarios
    .where('email', '==', email)
    .limit(1)
    .get();

  // Si no hay resultados, devolvemos null
  if (snapshot.empty) {
    return null;
  }

  // Devolvemos el primer usuario encontrado
  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() };
};

/**
 * Buscar un usuario por su id
 */
export const buscarUsuarioPorId = async (id) => {
  const doc = await coleccionUsuarios.doc(id).get();

  // Si no existe, devolvemos null
  if (!doc.exists) {
    return null;
  }

  // Devolvemos el usuario
  return { id: doc.id, ...doc.data() };
};
