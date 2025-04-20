const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("listings/cover.ejs");
});
app.get("/home", (req, res) => {
  res.render("listings/home.ejs");
});
app.get("/events", (req, res) => {
  res.render("listings/events.ejs");
});
app.get("/register", (req, res) => {
  res.render("listings/register.ejs");
});
app.listen(3000, () => {
  console.log("serer is online");
});
