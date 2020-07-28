const Task = require('./components/Tasks');
const Tags = require("./components/Tags");
const Spaces = require("./components/Spaces");
const Lists = require("./components/Lists");
const Teams = require("./components/Teams");
const TaskTemplates = require("./components/TaskTemplates");
const Webhooks = require("./components/Webhooks");
const Folders = require("./components/Folders");

var Clickup = function (token) {
	this.token = token;

	this.Tasks = new Task(this.token);
	this.Tags = new Tags(this.token);
	this.Spaces = new Spaces(this.token);
	this.Lists = new Lists(this.token);
	this.Teams = new Teams(this.token);
	this.TaskTemplates = new TaskTemplates(this.token);
	this.Webhooks = new Webhooks(this.token);
	this.Folders = new Folders(this.token);
}

module.exports = Clickup;
