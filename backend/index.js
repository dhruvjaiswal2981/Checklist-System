const express = require("express");
const axios = require("axios");
const cors = require("cors");
const evaluateChecklist = require("./helpers/evaluateRules");

const app = express();
app.use(cors());

const API_URL = "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639";

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const data = response.data;
    const results = evaluateChecklist(data);
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
