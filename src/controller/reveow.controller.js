import Review from "../models/reveiw.js";

export const createReview = async (req, res) => {
  try {
    
    const review = await Review.create(req.body);
    res.status(201).json({ message: "Review added", review });
  } catch (error) {
    res.status(500).json({ message: "Error adding review", error });
  }
};

export const getReviewsByProductId = async (req, res) => {
  try {
    const reviews = await Review.findAll({ where: { productId: req.params.productId } });
    res.status(200).json({ message: "Reviews fetched", reviews });
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews", error });
  }
};
