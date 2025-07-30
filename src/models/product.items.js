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
      type: DataTypes.STRING,
      allowNull: false,
    },
    detailImgPath: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const value = this.getDataValue("detailImgPath");
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue("detailImgPath", JSON.stringify(value));
      },
    },
    office: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const value = this.getDataValue("office");
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue("office", JSON.stringify(value));
      },
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const value = this.getDataValue("review");
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue("review", JSON.stringify(value));
      },
    }

  },
  {
    timestamps: true,
  }
);

export default Product;

// Product.sync({force:true}).then(()=>console.log("product was clear"))