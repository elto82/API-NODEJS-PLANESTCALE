import db from "../config/db.js";

export const getCountries = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM country";

    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

export const getCountry = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM country WHERE id = ?";

    db.query(query, id, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

export const createCountry = (data) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO country SET ?";

    db.query(query, data, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

export const updateCountry = (id, data) => {
  return new Promise((resolve, reject) => {
    const query = "UPDATE country SET ? WHERE id = ?";

    db.query(query, [data, id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

export const deleteCountry = (id) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM country WHERE id = ?";

    db.query(query, id, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
