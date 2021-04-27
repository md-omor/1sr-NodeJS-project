const express = require("express");

const app = express();
const port = 8000

app.get("/", (req, res) => {
  res.json([
      {
          name:'omor',
          id:2,
          age:16,
          worker:'Node JS Developer'
      }
  ]);
});

app.listen(port, () => {
    console.log(`listening to the port no ${port}`);
})