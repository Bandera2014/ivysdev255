//made it to here:  The Pug templates you created have CSS classes in their markup to define their layout and presentation. Replace the content of style.css with the following to make use of those classes:


// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");

/**
 * App Variables
 */
 const app = express();
 const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */
 app.set("views", path.join(__dirname, "views"));
 app.set("view engine", "pug");
 app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */
// app.get("/", (req, res) => {
//   res.render("index", { title: "Home" });
// });
app.get("/", (req, res) => {
     res.render("index", { title: "Home" });
   });

app.get("/", (req, res) => { ... });

app.get("/user", (req, res) => {
  res.render("user", { title: "Profile", userProfile: { nickname: "Auth0" } });
});

/**
 * Server Activation
 */
app.listen(port, () => {
     console.log(`Listening to requests on http://localhost:${port}`);
});