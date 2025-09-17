require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/public", express.static(path.join(__dirname, "public")));

const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
app.set("layout", "layout"); // views/layout.ejs
app.set("view engine", "ejs");
app.use(expressLayouts);

// routes
app.use("/api/menu", require("./routes/menu"));
app.use("/api/orders", require("./routes/orders"));

// pages
app.get("/", (req, res) => res.redirect("/menu"));
app.get("/menu", (req, res) => res.render("menu")); // menu page will fetch via API
app.get("/dashboard", (req, res) => res.render("dashboard"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
