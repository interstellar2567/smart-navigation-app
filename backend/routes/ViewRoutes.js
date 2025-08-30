import express from "express";
const viewRouter = express.Router();
const accessToken = "jcuebpwoxocrnegndhqtlbulvhqjgqaooxfr";
// Generate dynamic RealView Widget Embed URL
viewRouter.post("/realview", (req, res) => {
	const { lat, lng } = req.body;
	const embedUrl = createRealViewEmbed({ lat, lng, accessToken });
	res.json({ embedUrl });
});

// Generate dynamic 3D Metaverse Widget Embed URL
viewRouter.post("/metaverse", (req, res) => {
	const { venueId } = req.body;
	const embedUrl = createMetaverseEmbed({ venueId, accessToken });
	res.json({ embedUrl });
});

export default viewRouter;
