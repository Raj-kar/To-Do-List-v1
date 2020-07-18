
const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workDayItems = [];

app.get('/', function (req, res) {

    let day = date.getDate();
    res.render('list', { listTitle: day, newListItem: items });

})

app.post('/', function (req, res) {
    console.log(req.body.list);

    item = req.body.todo;

    if (req.body.list === "Work") {
        workDayItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect('/');
    }

})

app.get('/work', function (req, res) {
    res.render("list", { listTitle: "Work Day", newListItem: workDayItems });
})

app.get('/about', function (req, res) {
    res.render("about");
})


app.listen(3000, function () {
    console.log("server started at port 3000");
})