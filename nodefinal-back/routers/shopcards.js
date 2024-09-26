const express = require("express");
const multer = require("multer");
const path = require("path");
const {
    getAllCards,
    getCardById,
    createCard,
    deleteCard,
} = require("../Controllers/shopCardsControllers");
const { ErrorMiddleware } = require("../utils/ErrorHandler");

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}-${file.fieldname}${ext}`;
        cb(null, filename);
    },
});

const upload = multer({ storage });

router.get("/", getAllCards); 

router.get("/:id", getCardById);

router.post("/", upload.fields([
    { name: "image", maxCount: 1 },
    { name: "image2", maxCount: 1 }
]), createCard);

router.delete("/:id", deleteCard); 

router.use(ErrorMiddleware);

module.exports = router;
