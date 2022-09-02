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
// redirfect to main page
app.get('/', (req, res) => {
  res.redirect("/pokemons")
})


// INDEX
app.get("/pokemons/", (req, res) => {
  res.render("index_pokemon.ejs", {
    pokemon: pokemons,
    tabTitle: "Index"
  })
})

// NEW
app.get("/pokemons/new", (req, res) => {
  res.render("new_pokemon.ejs", {
    tabTitle: "New"
  })
})

// DELETE
app.delete("/pokemons/:idOfPokemon", (req, res) => {
  //remove the Pokemon object from the array
  pokemons.splice(req.params.idOfPokemon, 1),
    res.redirect("/pokemons")
})

// UPDATE
app.put("/pokemons/:idOfPokemon", (req, res) => {
  //:idOfPokemon is the index of our fruits array that we want to change
  //Set that element to the value of req.body (the input data)
  pokemons[req.params.idOfPokemon] = req.body;
  res.redirect("/pokemons") //redirect to the index page
})

// CREATE
app.post("/pokemons", (req, res) => {
  res.send(req.body)
  pokemons.push(req.body)
  res.redirect("/pokemons")
})

// EDIT
app.get("/pokemons/:idOfPokemon/edit", (req, res) => {
  res.render("edit_pokemon.ejs",
    {
      //pass in an object that contains
      pokemon: pokemons[req.params.idOfPokemon], //the pokemon object
      index: req.params.idOfPokemon, //... and its index in the array
      tabTitle: "Edit"
    }
  )
})

// SHOW
app.get("/pokemons/:idPokemonIndex", (req, res) => {
  res.render("show_pokemon.ejs", {
    pokemon: pokemons[req.params.idPokemonIndex],
    tabTitle: "Show",
  })
})


// ----- Listener -----
app.listen(port, () => {
  console.log("listening...");
})