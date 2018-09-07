const express = require("express");
const app = express();
const host = process.env.PORT || 3000;
const data = require("./data.js");

app.get("/", (req, res) => {
  res.send(data);
})

app.get("/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const dataItem = data.filter(dataElement => {
    return dataElement.id === id;
  })
  if (dataItem !== []) {
    res.send(dataItem);
  } else {
    res.status(404).send("Error: Page does not exist");
  }
})

app.listen(host, () => console.log(`Server using port ${host}`));
