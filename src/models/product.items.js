import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    hostImgPath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hostName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hostingTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     hostingReview: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    catogry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mainImgPath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    raitingImgPath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    raiting: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    detailImgPath: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const value = this.getDataValue("detailImg");
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue("detailImg", JSON.stringify(value));
      },
    },
    officeImgPath: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const value = this.getDataValue("detailImg");
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue("detailImg", JSON.stringify(value));
      },
    },
    officeTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    officeInfo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviewImg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviewCharacter: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviewRaitingImg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviewTimeWith: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     reviewDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      reviewperagraph: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  {
    timestamps: true,
  }
);

export default Product;

// Product.sync({force:true}).then(()=>console.log("product was clear"))
