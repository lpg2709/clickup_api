const Task = require('./components/Tasks');

var Clickup = function(token){
	this.token = token;

	this.Tasks = new Task(this.token);
}

module.exports = Clickup;
