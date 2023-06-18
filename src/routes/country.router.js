import { Router } from "express";
import {
  getCountries,
  getCountryById,
  createCountry,
  updateCountry,
  deleteCountry,
} from "../controllers/country.controller.js";

const contryRouter = Router();

contryRouter.get(`/`, getCountries);

contryRouter.get("/:id", getCountryById);

contryRouter.post("/", createCountry);

contryRouter.put("/:id", updateCountry);

contryRouter.delete("/:id", deleteCountry);

export default contryRouter;
