require("dotenv").config();
const connectDB = require("../config/db");
const MenuItem = require("../models/MenuItem");

const sample = [
  {
    name: "Margherita Pizza",
    description: "Tomato, mozzarella",
    price: 9.5,
    category: "Pizza",
  },
  {
    name: "Veg Burger",
    description: "Patty with salad",
    price: 7.0,
    category: "Burgers",
  },
  { name: "Coke", description: "330ml", price: 2.0, category: "Drinks" },
];

async function seed() {
  await connectDB();
  await MenuItem.deleteMany({});
  await MenuItem.insertMany(sample);
  console.log("Seed complete");
  process.exit();
}
seed();
