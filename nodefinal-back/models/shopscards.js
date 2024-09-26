const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be a positive number"],
        trim:true
    },
    image: {
        type: String,
    },
    image2: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    features: {
        color: {
            type: String,
        required: [true, "Color is required"],
        trim: true,
        },
        size: {
            type: String,
            required: [true, "Size is required"],
            trim: true,
        },
        material: {
            type: String,
        required: [true, "Material is required"],
        trim: true,
        },
    },
});

module.exports = mongoose.model("ShopCards", CardSchema);