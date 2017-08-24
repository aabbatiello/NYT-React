// Require mongoose
var mongoose = require("mongoose");

// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
   // title is a string 
    title: {
        type: String
    },
    // url is a string
    url: {
        type: String
    },
    date: {
        type: Date
    }
});


// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;