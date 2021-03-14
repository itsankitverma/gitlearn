const express = require("express");
const app = express();

app.set("view engine","hbs")

app.get("/", (req, res) => {
//   res.send("this is home page");
res.render("index",{
    name:"Ankit Verma"
})
});

app.listen(4000, (err) => {
  console.log("App stated");
});
