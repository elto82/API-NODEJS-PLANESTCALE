import * as countryServices from "../services/country.service.js";

export const getCountries = (req, res) => {
  countryServices
    .getCountries()
    .then((result) => {
      res.status(200).json({
        status: "Ok",
        message: "Successful",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCountryById = (req, res) => {
  const { id } = req.params;
  countryServices
    .getCountry(id)
    .then((result) => {
      res.status(200).json({
        status: "Ok",
        message: "Successful",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        status: "Error",
        message: "An error occurred",
      });
    });
};

export const createCountry = (req, res) => {
  const data = req.body;
  countryServices
    .createCountry(data)
    .then((result) => {
      res.status(200).json({
        status: "Ok",
        message: "Country created successfully",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        status: "Error",
        message: "An error occurred while creating the country",
      });
    });
};

export const updateCountry = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  countryServices
    .updateCountry(id, data)
    .then((result) => {
      res.status(200).json({
        status: "Ok",
        message: "Country updated successfully",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        status: "Error",
        message: "An error occurred while updating the country",
      });
    });
};

export const deleteCountry = (req, res) => {
  const { id } = req.params;
  countryServices
    .deleteCountry(id)
    .then((result) => {
      res.status(200).json({
        status: "Ok",
        message: "Country deleted successfully",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        status: "Error",
        message: "An error occurred while deleting the country",
      });
    });
};
