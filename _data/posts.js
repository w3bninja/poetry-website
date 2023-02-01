const fetch = require("node-fetch");

module.exports = async function () {
  console.log("Fetching data...");

  return fetch("https://aaronlandry.net/wp-json/wp/v2/poetry")
    .then((res) => res.json())
    .then((json) => json);
};