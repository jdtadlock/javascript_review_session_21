'use strict';


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isEmail: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 250]
      }
    }
    // password: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [6, 250]
    //   }
    // }
  }, {
      // instanceMethods: {
      //   validatePassword: function (val) {
      //     return bcrypt.compareSync(val, this.password);
      //   }
      // }
    });

  // User.beforeCreate(function (user, options) {
  //   return user.password = bcrypt.hashSync(user.password, 10);
  // });

  User.associate = function (models) {
    // associations can be defined here
  };

  return User;
};