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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    raiting: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rewiews: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bestsellerp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hotdeal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    originalPrice: {
      type: DataTypes.INTEGER,
    },
    discountPercent: {
      type: DataTypes.STRING,
    },
    categroy: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const value = this.getDataValue("size");
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue("size", JSON.stringify(value));
      },
    },
    headimgage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    detailimages: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const value = this.getDataValue("detailimages");
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue("detailimages", JSON.stringify(value));
      },
    },
    bestsellerimg: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const value = this.getDataValue("bestsellerimg");
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue("bestsellerimg", JSON.stringify(value));
      },
    },
    // selectedSize: {
    //   type: DataTypes.TEXT,
    //   allowNull: true,
    //   get() {
    //     //return JSON.parse(this.getDataValue("selectedSize") || "[]");
    //     const value = this.getDataValue("selectedSize");
    //     return value ? JSON.parse(value) : [];
    //   },
    //   set(value) {
    //     this.setDataValue("selectedSize", JSON.stringify(value));
    //   },
    // },

    selectedColor: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const value = this.getDataValue("selectedColor");
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue("selectedColor", JSON.stringify(value));
      },
    },

    paragraph: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const value = this.getDataValue("paragraph");
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue("paragraph", JSON.stringify(value));
      },
    },
    productInfomation: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const value = this.getDataValue("productInfomation");
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue("productInfomation", JSON.stringify(value));
      },
    },
    avalible: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const value = this.getDataValue("avalible");
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue("avalible", JSON.stringify(value));
      },
    },
    optionavalible: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const value = this.getDataValue("optionavalible");
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue("optionavalible", JSON.stringify(value));
      },
    },
  },
  {
    timestamps: true,
  }
);

export default Product;

// Product.sync({force:true}).then(()=>console.log("product was clear"))
