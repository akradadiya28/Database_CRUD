const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://arpitradadiya:XABpNF2aHhD9wwyj@cluster0.8p5oc.mongodb.net/Todo_App")
    .then(() => console.log("Database Connected!"))
    .catch(err => console.log(err));

module.exports = mongoose;  