
const pool = require('../config/db');

// Definición de un controlador para obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios', error });
  }
};


// Definición de un controlador para obtener los usuarios por Id
const getUserById = async (req, res) => {
  try {
    let userId=req.body.idUser;
    const result = await pool.query('SELECT * FROM users WHERE user_id = $1', [userId]);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios', error });
  }
};





// Exporta todos los controladores al final del archivo
module.exports = {
  getAllUsers,
  getUserById
};

  