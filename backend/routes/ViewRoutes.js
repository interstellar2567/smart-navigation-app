// routes/mapplsRoutes.js
import { Router } from "express";
import {
	getRealViewEmbed,
	getMetaverseEmbed,
} from "../controllers/3dpanaromicview.controller.js";

const router = Router();

// GET /api/realview?lat=..&lng=..
router.post("/realview", getRealViewEmbed);

// GET /api/metaverse?venueId=..
router.post("/metaverse", getMetaverseEmbed);

export default router;
