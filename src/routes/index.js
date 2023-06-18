import { Router } from "express";
import countryRouter from "./country.router.js";
const router = Router();

const prefix = "/api";

router.get(prefix, (req, res) => {
  res.send("Welcome to the API Whit planetscale Mysql");
});

router.use(`${prefix}/country`, countryRouter);

export default router;
