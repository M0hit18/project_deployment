import express from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";
import { Item } from "./models/itemmodel.js";
import cors from "cors";
import { createRequire } from "module";
const require = createRequire(import.meta.url); // To use `require` for multer

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/files", express.static("files")); // Serve static files

//================================================== Multer Setup ==========================================
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files"); // Directory to store uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now(); // Add unique timestamp to avoid name clashes
    cb(null, uniqueSuffix + "_" + file.originalname); // Format: timestamp_originalName
  },
});

const upload = multer({ storage: storage });

// ================================== Routes ==================================

// GET all items
app.get("/item", async (req, res) => {
  try {
    const items = await Item.find({});
    return res.status(200).json({
      count: items.length,
      data: items,
    });
  } catch (error) {
    console.error("Error fetching items:", error.message);
    res.status(500).send({ message: "Error fetching items." });
  }
});

// POST a new item with file upload
app.post("/item", upload.single("file"), async (req, res) => {
  try {
    // Validate required fields
    const { name, email, phoneno, title, description } = req.body;
    if (!name || !email || !phoneno || !title || !description) {
      return res.status(400).send({ message: "All fields are required." });
    }

    // Create new item
    const newItem = {
      name,
      email,
      phoneno,
      title,
      description,
      image: req.file.filename, // Save uploaded file name
    };

    const item = await Item.create(newItem);
    return res.status(201).send(item);
  } catch (error) {
    console.error("Error creating item:", error.message);
    res.status(500).send({ message: "Error creating item." });
  }
});

// GET item by ID
app.get("/item/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findById(id);

    if (!item) {
      return res.status(404).send({ message: "Item not found." });
    }

    return res.status(200).json(item);
  } catch (error) {
    console.error("Error fetching item by ID:", error.message);
    res.status(500).send({ message: "Error fetching item." });
  }
});

// DELETE item by ID
app.delete("/item/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Item.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).send({ message: "Item not found." });
    }

    return res.status(200).send({ message: "Item deleted successfully." });
  } catch (error) {
    console.error("Error deleting item:", error.message);
    res.status(500).send({ message: "Error deleting item." });
  }
});

// ================================================== Start Server ==================================================
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// ================================================== Connect to Database ==================================================
mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database.");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
  });


  
