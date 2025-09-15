import express from "express"
import { getAllBarbies, getById, createBarbie, barbieDelete, updateBarbie} from "./../controllers/barbieControllers.js"

const router = express.Router();

router.get("/", getAllBarbies);
router.get("/:id", getById);
router.post("/", createBarbie);
router.delete("/:id", barbieDelete);
router.put("/:id", updateBarbie);


export default router;