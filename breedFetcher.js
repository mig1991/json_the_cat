const request = require("request");

const breedName = process.argv[2];

if (!breedName) {
  console.error("Please provide a cat breed name.");
  process.exit(1);
}

const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${encodeURIComponent(breedName)}`;

request.get(apiUrl, (error, response, body) => {
  // check for errors
  if (error) {
    console.error("Error:", error);
    return;
  }

  const data = JSON.parse(body);
  // console.log(data);

  const firstEntry = data[0];

  if (!firstEntry) {
    console.error(`Requested breed: ${breedName} was not found.`);
    return;
  }

  console.log(`${breedName} Description:`, firstEntry.description);
});
