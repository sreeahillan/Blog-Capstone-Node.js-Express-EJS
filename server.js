import express from "express";
import body from "body-parser";

const app = express();
const port = 3001;

app.set("viewengine", "ejs");

app.use(body.urlencoded({ extended: true }));

var array = [];

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/new", (req, res) => {
  res.render("newpost.ejs");
});

app.post("/new", (req, res) => {
  array.push({
    id: array.length,
    title: req.body.title,
    content: req.body.content,
  });
  res.render("index.ejs", {
    title: array,
  });
});

app.post("/edited/:id", (req, res) => {
  const id_holder2 = array[req.params.id];
  id_holder2.title = req.body.title;
  id_holder2.content = req.body.content;
  res.render("index.ejs" , {
      title : array
});
});

app.get("/edit/:id", (req, res) => {
  const id_holder = array[req.params.id];
  res.render("edit.ejs", {
    id: id_holder.id,
    title: id_holder.title,
    content: id_holder.content,
  });
});
app.get("/del", (req, res) => {
  showcontent = "";
  showtitle = "";
  res.render("index.ejs", {
    title: showtitle,
    content: showcontent,
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port} !`);
});
