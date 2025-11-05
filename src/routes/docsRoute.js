import express from "express";
import {
	getAuthenticationPage,
	getEndpointCarsPage,
	getEndpointFormPage,
	getEndpointHomePage,
	getErrorsPage,
	getExamplesPage,
	getIntroductionPage,
	getResourcesPage
} from "../views/pages/index.js";

const router = express.Router();

router.get("/", (req, res) => {
	res.redirect("/docs/introduction");
});

router.get("/introduction", (req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	res.send(getIntroductionPage());
});

router.get("/authentication", (req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	res.send(getAuthenticationPage());
});

router.get("/endpoint/home", (req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	res.send(getEndpointHomePage());
});

router.get("/endpoint/cars", (req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	res.send(getEndpointCarsPage());
});

router.get("/endpoint/form", (req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	res.send(getEndpointFormPage());
});

router.get("/examples", (req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	res.send(getExamplesPage());
});

router.get("/errors", (req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	res.send(getErrorsPage());
});

router.get("/resources", (req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	res.send(getResourcesPage());
});

export default router;

