const { fetchBreedDescription } = require("./breedFetcher");

const breedName = process.argv[2];

if (!breedName) {
  console.error("Please provide a bread name as a command-line argument.");
  process.exit(1);
}

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error:", error);
  }
  console.log(desc);
});
