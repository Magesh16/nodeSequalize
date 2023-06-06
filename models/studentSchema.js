import {DataTypes }  from 'sequelize';
import sequelize from '../config/sequalize.js';

export const Student = sequelize.define('students', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age:{
    type: DataTypes.INTEGER,
    allowNull:false
  },
  dob:{
        type: DataTypes.DATE,
        allowNull:false
    },
},{
    timestamps: false,
});


(async () => {
    try {
      await Student.sync();
      console.log('Student model synced with database.');
    } catch (error) {
      console.error('Unable to sync Student model with database:', error);
    }
  })();