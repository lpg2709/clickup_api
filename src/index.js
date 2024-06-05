const Attachments = require("./components/Attachments");
const Checklists = require("./components/Checklists");
const Comments = require("./components/Comments");
const CustomFields = require("./components/CustomFields");
const Dependencies = require("./components/Dependencies");
const Folders = require("./components/Folders");
const Goals = require("./components/Goals");
const Guests = require("./components/Guests");
const Lists = require("./components/Lists");
const Members = require("./components/Members");
const SharedHierarchy = require("./components/SharedHierarchy");
const Spaces = require("./components/Spaces");
const Tags = require("./components/Tags");
const TaskCheckList = require("./components/TaskCheckList");
const TaskRelationships = require("./components/TaskRelationships");
const Task = require("./components/Tasks");
const TaskTemplates = require("./components/TaskTemplates");
const Teams = require("./components/Teams");
const TimeTracking = require("./components/TimeTracking");
const Users = require("./components/Users");
const Roles = require("./components/Roles");
const Views = require("./components/Views");
const Webhooks = require("./components/Webhooks");
const Requests = require("./utils/requests");
const Attachment = require("./utils/Attachments");

var Clickup = function (token, requestParam) {
	this.token = token;
	const oRequestParam = requestParam || {
		host: "api.clickup.com",
		port: 443,
		pathPrefix: "",
	};
	const oRequests = new Requests(oRequestParam);
	const oAttachment = new Attachment(oRequestParam);

	this.Attachments = new Attachments(this.token, oAttachment);
	this.Checklists = new Checklists(this.token, oRequests);
	this.Comments = new Comments(this.token, oRequests);
	this.CustomFields = new CustomFields(this.token, oRequests);
	this.Dependencies = new Dependencies(this.token, oRequests);
	this.Folders = new Folders(this.token, oRequests);
	this.Goals = new Goals(this.token, oRequests);
	this.Guests = new Guests(this.token, oRequests);
	this.Lists = new Lists(this.token, oRequests);
	this.Members = new Members(this.token, oRequests);
	this.SharedHierarchy = new SharedHierarchy(this.token, oRequests);
	this.Spaces = new Spaces(this.token, oRequests);
	this.Tags = new Tags(this.token, oRequests);
	this.TaskCheckList = new TaskCheckList(this.token, oRequests);
	this.TaskRelationships = new TaskRelationships(this.token, oRequests);
	this.Tasks = new Task(this.token, oRequests);
	this.TaskTemplates = new TaskTemplates(this.token, oRequests);
	this.Teams = new Teams(this.token, oRequests);
	this.TimeTracking = new TimeTracking(this.token, oRequests);
	this.Users = new Users(this.token, oRequests);
	this.Roles = new Roles(this.token, oRequests);
	this.Views = new Views(this.token, oRequests);
	this.Webhooks = new Webhooks(this.token, oRequests);
};

module.exports = Clickup;
