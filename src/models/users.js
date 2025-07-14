import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Users = sequelize.define("users",{
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
})
export default Users
//  Users.sync({force:true}).then(()=>console.log("product was clear"))