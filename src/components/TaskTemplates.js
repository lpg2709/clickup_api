const TaskTemplate = require("../models/TaskTemplates")

var TaskTemplates = function (token) {
	this.token = token;
}

TaskTemplates.prototype.get_task_templates = function (team_id, page) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await TaskTemplate.get_task_templates(team_id, page, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

TaskTemplates.prototype.create_task_from_template = function (list_id, template_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await TaskTemplate.create_task_from_template(list_id, template_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = TaskTemplates;
