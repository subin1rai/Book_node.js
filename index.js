const express = require("express"); //import expresss function
const app = express(); // initialize express
const route = express.Router();
// making json file to read so requiring fs library
const fs = require("fs");

app.use(express.static("public")); // to use css do this and folder

// setting viewengine to view ejs file
app.set("view engine", "ejs");

function fetchdata() {
  const data = fs.readFileSync("./datas/books.json");
  const dataJSON = JSON.parse(data);
  return dataJSON;
}

app.get("/", (req, res) => {
  const books = fetchdata();
  res.render("pages/index", { books: books });
});

app.get("/book/:isbn", (req,res)=> {
    const {isbn} = req.params;
    const books = fetchdata();
    const selectbook = books.find ((book) => book.isbn ===isbn);
    res.render("pages/book", {book: selectbook});
    // console.log(selectbook);
    // res.render("pages/book");

    //object unpacking
});

// uploading to the website with port 1070
app.listen(1070, () => {
  console.log("##-- Connected to the port 1070 --##");
});
