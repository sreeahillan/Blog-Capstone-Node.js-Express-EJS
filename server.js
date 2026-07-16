import express from "express";
import body from "body-parser";

const app = express();
const port = 3001;

app.use(body.urlencoded({extended : true}));

var showtitle = "";
var showcontent = "";

app.get("/" , (req , res) => {
    res.render("index.ejs");
});

app.get("/new" , (req , res) => {
    res.render("newpost.ejs");
});




app.post("/new" , (req , res) => {
    showcontent = req.body.content;
    showtitle = req.body.title;
    res.render("index.ejs" , {
        "title" : showtitle,
        "content" : showcontent
    });  
});
app.get("/edit" , (req , res) => {
    res.render("edit.ejs" , {
        "title" : showtitle
    });
});



app.listen(port , () => {
    console.log(`listening on port ${port} !`);
})