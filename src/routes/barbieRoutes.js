import express from "express"
import { getAllBarbies, getById, createBarbie, barbieDelete} from "./../controllers/barbieControllers.js"

const router = express.Router();

router.get("/", getAllBarbies);
router.get("/:id", getById);
router.post("/", createBarbie);
router.delete("/:id", barbieDelete);


export default router;