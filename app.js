import path from "path";
import { fileURLToPath } from "url";

import express from "express";

// ESM does not have __dirname constant by default
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
