const accessToken = "YOUR_ACCESS_TOKEN";
// Helper: Generate dynamic RealView Widget Embed URL
function createRealViewEmbed({ lat, lng, accessToken }) {
	return `https://realview.mappls.com/realview_widget/${lat},${lng}?access_token=${accessToken}&minDistance=1&maxDistance=500&arrow=true&map=true&zoomControls=true&controls=true&mapWidth=500&mapHeight=400`;
}

// Helper: Generate dynamic 3D Metaverse Widget Embed URL
function createMetaverseEmbed({ venueId, accessToken }) {
	return `https://embed.mappls.com/immersive/${venueId}?token=${accessToken}&placeDetails=true&castShadow=false&rotate=true`;
}
