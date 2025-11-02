import fetch from "node-fetch";
import { parseString } from "xml2js";

const carDataServices = {
	getCarData: async () => {
		try {
			const apiUrl = process.env.SPIDERVO_API_URL;

			if (apiUrl) {
				const response = await fetch(apiUrl);

				if (response) {
					// Vérifie si la réponse est définie
					if (response.ok) {
						const xmlData = await response.text();

						// Vérifier si la réponse est vide ou invalide
						if (!xmlData || xmlData.trim().length === 0) {
							console.error("Empty response from API");
							throw new Error("Empty response from API");
						}

						// Vérifier si la réponse commence par du XML valide (<?xml ou <)
						const trimmedData = xmlData.trim();
						if (!trimmedData.startsWith("<?xml") && !trimmedData.startsWith("<")) {
							console.error("Response is not valid XML. First 200 chars:", trimmedData.substring(0, 200));
							throw new Error(`Invalid XML response: ${trimmedData.substring(0, 100)}`);
						}

						return new Promise((resolve, reject) => {
							parseString(
								xmlData,
								{ trim: true, explicitArray: false },
								(err, result) => {
									if (err) {
										console.error("Error converting XML to JSON:", err);
										console.error("Response content (first 500 chars):", xmlData.substring(0, 500));
										reject(new Error(`Error converting XML to JSON: ${err.message}`));
									} else {
										// Vérifier si la structure attendue existe
										if (result && result.vehicules && result.vehicules.vehicule) {
											const cars = result.vehicules.vehicule;
											resolve(cars);
										} else {
											console.error("Unexpected XML structure:", JSON.stringify(result, null, 2));
											reject(new Error("Unexpected XML structure in response"));
										}
									}
								}
							);
						});
					} else {
						const errorText = await response.text().catch(() => "No error details");
						console.error(
							"Wrong response:",
							response.status,
							response.statusText,
							errorText.substring(0, 200)
						);
						throw new Error(`Server-side Fetch request error: ${response.status} ${response.statusText}`);
					}
				} else {
					console.error("No response received from the server");
					throw new Error("No response received from the server");
				}
			} else {
				console.error("apiUrl is not defined");
				throw new Error("apiUrl is not defined");
			}
		} catch (error) {
			console.error("Server-side Fetch request error", error);
			// Préserver le message d'erreur original s'il existe
			if (error.message) {
				throw error;
			}
			throw new Error(`Server-side Fetch request error: ${error.message || error}`);
		}
	},
};

export default carDataServices;
