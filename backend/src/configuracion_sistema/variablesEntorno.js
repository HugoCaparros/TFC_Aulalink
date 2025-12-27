import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export const entorno = {
  puerto: process.env.PORT || 3000
};
