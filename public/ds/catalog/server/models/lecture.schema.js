module.exports = function(mongoose){
    var LearningElement = require("./learningElement.schema.js")(mongoose);

    return mongoose.Schema({
        title: String,
        overview: String,
        learningElements: [LearningElement]
    });
}