const Task = require('./components/Tasks');
const Tags = require("./components/Tags");
const Spaces = require("./components/Spaces");

var Clickup = function(token){
	this.token = token;

	this.Tasks = new Task(this.token);
	this.Tags = new Tags(this.token);
	this.Spaces = new Spaces(this.token);
}

module.exports = Clickup;
