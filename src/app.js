import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import carDataRoute from "./routes/carDataRoute.js";
import homeRoute from "./routes/homeRoute.js";
import formRoute from "./routes/formRoute.js";
import docsRoute from "./routes/docsRoute.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());

app.use("/css", express.static(join(__dirname, "public/css")));
app.use("/js", express.static(join(__dirname, "public/js")));

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
});

app.use("/docs", docsRoute);

app.use("/", homeRoute);

app.use("/api", carDataRoute);

app.use("/api/form", formRoute);

app.use((req, res) => {
	res.status(404).send("404 Not Found");
});

export default app;
