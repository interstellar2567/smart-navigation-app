// controllers/mapplsController.js

// Reuse your helpers
function createRealViewEmbed({ lat, lng, accessToken }) {
	return `https://realview.mappls.com/realview_widget/${lat},${lng}?access_token=${accessToken}&minDistance=1&maxDistance=500&arrow=true&map=true&zoomControls=true&controls=true&mapWidth=500&mapHeight=400`;
}

function createMetaverseEmbed({ venueId, accessToken }) {
	return `https://embed.mappls.com/immersive/${venueId}?token=${accessToken}&placeDetails=true&castShadow=false&rotate=true`;
}
const accessToken = "jcuebpwoxocrnegndhqtlbulvhqjgqaooxfr";
// Controller for RealView
export const getRealViewEmbed = (req, res) => {
	const { lat, lng } = req.body;

	if (!lat || !lng) {
		return res.status(400).json({ error: "lat and lng are required" });
	}

	const url = createRealViewEmbed({ lat, lng, accessToken });
	return res.json({ url });
};

// Controller for Metaverse
export const getMetaverseEmbed = (req, res) => {
	const { venueId } = req.body;

	if (!venueId) {
		return res.status(400).json({ error: "venueId is required" });
	}

	const url = createMetaverseEmbed({ venueId, accessToken });
	return res.json({ url });
};
