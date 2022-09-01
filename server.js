// ----- DEPENDANCIES -----
const express = require("express");
const app = express();
const port = 3000;
const methodOverride = require("method-override")

// ----- DATA -----
const pokemons = require("./models/pokemon.js");

// ----- MIDDLEWARE -----
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));


// ----- ROUTES -----

// INDEX
app.get("/pokemons/", (req, res) => {
  res.render("index_pokemon.ejs", {
    tabTitle: "Index"
  })
})

// NEW
// DELETE
// UPDATE
// CREATE
// EDIT
// SHOW


// ----- Listener -----
app.listen(port, () => {
  console.log("listening...");
})