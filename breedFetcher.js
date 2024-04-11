// breedFetcher.js

const request = require("request");

// Function to fetch the breed description
const fetchBreedDescription = function(breedName, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${encodeURIComponent(breedName)}`;

  request.get(apiUrl, (error, response, body) => {
    // Check for errors
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);
    const firstEntry = data[0];

    if (!firstEntry) {
      const errorMessage = `Requested breed: ${breedName} was not found.`;
      callback(new Error(errorMessage), null);
      return;
    }

    callback(null, firstEntry.description);
  });
};

module.exports = { fetchBreedDescription };