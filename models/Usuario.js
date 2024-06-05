// models/Usuario.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define('Usuario', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'El nombre es obligatorio'
      },
      notEmpty: {
        msg: 'El nombre no puede estar vacío'
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: 'El email ya está en uso'
    },
    validate: {
      notNull: {
        msg: 'El email es obligatorio'
      },
      isEmail: {
        msg: 'El email no es válido'
      }
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'La contraseña es obligatoria'
      }
    }
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'usuarios'
});

module.exports = Usuario;
