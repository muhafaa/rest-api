'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Contact extends Model { }

  Contact.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'cannot insert name with empty value'
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'cannot insert phone with empty value'
        }
      }
    }
  }, { sequelize })

  Contact.associate = function (models) {
    // associations can be defined here
  };
  return Contact;
};