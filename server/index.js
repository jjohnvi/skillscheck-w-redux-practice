const express = require("express");
const massive = require("massive");
const app = express();
const controller = require("./controller/Controller");
require("dotenv").config();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Database Connected, brooo");
  })
  .catch(err => console.error(err));

app.get("/api/inventory", controller.getAll);
app.post("/api/inventory", controller.create);
app.get("/api/inventory/:id", controller.getOne);
app.delete("/api/inventory/:id", controller.deleteItem);
app.put("/api/inventory/:id", controller.updateItem);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
