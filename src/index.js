const Task = require('./components/Tasks');
const Tags = require("./components/Tags");

var Clickup = function(token){
	this.token = token;

	this.Tasks = new Task(this.token);
	this.Tags = new Tags(this.token);
}

module.exports = Clickup;
