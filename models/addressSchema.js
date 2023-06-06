import {DataTypes } from "sequelize";
import sequelize from "../config/sequalize.js";
import { Student } from "./studentSchema.js";

export const Address = sequelize.define('address',{
    street:{
        type: DataTypes.STRING,
        allowNull:false
    },
    district:{
        type: DataTypes.STRING,
        allowNull: false
    },
    state:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    timestamps:false
});

Address.belongsTo(Student, {foreignKey: "student_id"});
Student.hasMany(Address, { foreignKey: 'student_id' });


(async () => {
    try {
      await Address.sync();
      console.log('Address model synced with database.');
    } catch (error) {
      console.error('Unable to sync Address model with database:', error);
    }
  })();