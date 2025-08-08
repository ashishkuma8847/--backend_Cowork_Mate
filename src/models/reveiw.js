import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Product from "./product.items.js";

const Review = sequelize.define("Review", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  productId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  reviewCharacter: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reviewDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reviewImg: {
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
    category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reviewperagraph: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const value = this.getDataValue("reviewperagraph");
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue("reviewperagraph", JSON.stringify(value));
      },
    },
}, 
{
  timestamps: true,
});

Review.belongsTo(Product, { foreignKey: "productId" });
Product.hasMany(Review, { foreignKey: "productId", as: "reviews" });

export default Review;
// Review.sync({force:true}).then(()=>console.log("product was clear"))
