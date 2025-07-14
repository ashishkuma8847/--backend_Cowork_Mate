import Product from "../models/product.items.js";
export const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({ message: "Product created", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await product.update(req.body);
    res.status(200).json({ message: "Product updated", product });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};

export const getallproduct = async (req, res) => {
  try {
    const data = await Product.findAll();
    if (!data) return res.status(400).json({ message: "data not created" });

    res.status(200).json({ message: "getallproduct", data: data });
  } catch (error) {
    res.status(400).json({ message: "error", error: error.message });
  }
};

export const getoneproduct = async (req, res) => {
  try {
    const productid = await Product.findByPk(req.params.id);
    if (!productid) return res.status(400).json({ message: "data not found" });
    res.status(200).json({ message: "data", data: productid });
  } catch (error) {
    res.status(400).json({ message: "error", error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await product.destroy({ where: {} });
    res.status(200).json({ message: "Product deleted." });
  } catch (error) {
    res.status(500).json({ message: "Error deleted product", error });
  }
};

// status code common = "200"  true , succcc
