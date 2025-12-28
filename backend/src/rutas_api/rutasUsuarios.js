import express from 'express';
import { crearUsuario } from '../modelos_datos/Usuario.js';

const router = express.Router();

router.post('/prueba-usuario', async (req, res) => {
  try {
    const id = await crearUsuario({
      nombre: 'Usuario Test',
      email: 'test@backend.com'
    });

    res.json({
      mensaje: 'Usuario creado correctamente',
      id
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Error al crear usuario'
    });
  }
});

export default router;
