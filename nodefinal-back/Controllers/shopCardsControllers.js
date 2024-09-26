const Card = require("../models/shopscards");
const { ErrorHandler } = require("../utils/ErrorHandler");

const getAllCards = async (req, res, next) => {
  try {
    const { color, material, size, price } = req.query;

    const filter = {};
    if (color) filter["features.color"] = { $in: color.split(",") };
    if (material) filter["features.material"] = material;
    if (size) filter["features.size"] = size;
    if (price) {
      const priceRange = price.split("-");
      if (priceRange.length === 2) {
        filter.price = {
          $gte: Number(priceRange[0]),
          $lte: Number(priceRange[1]),
        };
      }
    }

    const cards = await Card.find(filter);
    if (!cards.length) {
      return next(new ErrorHandler("No cards found", 404));
    }

    res.status(200).json({ success: true, cards });
  } catch (error) {
    console.error("Error retrieving cards:", error);
    next(new ErrorHandler("Failed to retrieve cards", 500));
  }
};

const getCardById = async (req, res, next) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      return next(new ErrorHandler("Card not found", 404));
    }
    res.status(200).json({ success: true, card });
  } catch (error) {
    console.error("Error fetching card:", error);
    next(new ErrorHandler("Invalid card ID", 400));
  }
};

const createCard = async (req, res, next) => {
  try {
    const { title, price, features } = req.body;

    if (!features || !features.size || !features.color || !features.material) {
      return res.status(400).json({
        success: false,
        message: "All features (size, color, material) are required.",
      });
    }

    const images = {};
    if (req.files) {
      if (req.files.image) {
        images.image = `/uploads/${req.files.image[0].filename}`;
      }
      if (req.files.image2) {
        images.image2 = `/uploads/${req.files.image2[0].filename}`;
      }
    }

    const newCard = await Card.create({
      title,
      price,
      ...images,
      features,
    });

    res.status(201).json({
      success: true,
      newCard,
    });
  } catch (error) {
    console.error("Error creating card:", error);
    next(new ErrorHandler("Failed to create card", 500));
  }
};

const deleteCard = async (req, res, next) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.id);
    if (!card) {
      return next(new ErrorHandler("Card not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Card successfully deleted",
    });
  } catch (error) {
    console.error("Error deleting card:", error);
    next(new ErrorHandler("Invalid card ID", 400));
  }
};

module.exports = { getAllCards, getCardById, createCard, deleteCard };
