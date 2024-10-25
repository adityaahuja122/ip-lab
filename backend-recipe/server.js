const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

const recipeList = [
  {
    name: "Biryani",
    ingredients:
      "rice,masala,paneer,",
    time: "30 minutes",
    instructions:
      "1. boil , 2. add masale",
  },
  {
    name: "Paneer butter masala",
    ingredients:
      "paneer,butter,salt,pepper,onion, etc",
    time: "55 minutes",
    instructions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique laboriosam quod aliquid laborum doloremque ex, necessitatibus fuga, cumque aut est quam harum sapiente reiciendis ratione animi perspiciatis consequuntur distinctio! Ipsam, aperiam. Distinctio ab soluta fugiat adipisci quis in dolorem!",
  },
  {
    name: "manchurian",
    ingredients:
      "cabbage,chinnese masala, ",
    time: "45 minutes",
    instructions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique laboriosam quod aliquid laborum doloremque ex, necessitatibus fuga, cumque aut est quam harum sapiente reiciendis ratione animi perspiciatis consequuntur distinctio! Ipsam, aperiam. Distinctio ab soluta fugiat adipisci quis in dolorem!",
  },
  {
    name: "dosa",
    ingredients:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, officia.",
    time: "100 minutes",
    instructions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique laboriosam quod aliquid laborum doloremque ex, necessitatibus fuga, cumque aut est quam harum sapiente reiciendis ratione animi perspiciatis consequuntur distinctio! Ipsam, aperiam. Distinctio ab soluta fugiat adipisci quis in dolorem!",
  },
  {
    name: "idli",
    ingredients:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, officia.",
    time: "25 minutes",
    instructions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique laboriosam quod aliquid laborum doloremque ex, necessitatibus fuga, cumque aut est quam harum sapiente reiciendis ratione animi perspiciatis consequuntur distinctio! Ipsam, aperiam. Distinctio ab soluta fugiat adipisci quis in dolorem!",
  },
];

app.get("/api/getter", (req, res) => {
  res.json(recipeList);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
