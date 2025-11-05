import { mockCars } from "../data/mockCars.js";

const carDataServices = {
	getCarData: async () => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 100));

			return mockCars;
		} catch (error) {
			console.error("Error fetching mock car data:", error);
			throw new Error(`Error fetching car data: ${error.message || error}`);
		}
	},
};

export default carDataServices;
