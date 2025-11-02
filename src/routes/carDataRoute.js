import express from "express";
import carDataController from "../controllers/carDataController.js";

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const cars = await carDataController.getCarData();
		res.status(200).json(cars);
	} catch (error) {
		console.error("carDataRoute:", error);
		
		// Déterminer le code de statut approprié
		let statusCode = 500;
		if (error.message && error.message.includes("not defined")) {
			statusCode = 503; // Service Unavailable
		} else if (error.message && error.message.includes("Invalid XML")) {
			statusCode = 502; // Bad Gateway (problème avec l'API externe)
		}
		
		// Retourner une réponse JSON structurée
		res.status(statusCode).json({
			error: true,
			message: error.message || "Server-side error",
			timestamp: new Date().toISOString()
		});
	}
});

export default router;
