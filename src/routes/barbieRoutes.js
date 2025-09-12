import express from "express"
import { getAllBarbies, getById, createBarbie } from "./../controllers/barbieControllers.js"

const router = express.Router();

router.get("/", getAllBarbies);
router.get("/:id", getById);
router.post("/", createBarbie);


export default router;