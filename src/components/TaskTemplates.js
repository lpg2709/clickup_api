const Requests = require("../utils/requests");

var TaskTemplates = function (token) {
	this.token = token;
}
/**
 * Consult the task templates from a team
 * @param {String} team_id Team ID to consult
 * @param {Int} page Page index
 */
TaskTemplates.prototype.get_task_templates = function (team_id, page) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/team/${team_id}/taskTemplate?page=${page}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Create task from template
 * @param {String} list_id List ID where it will be created
 * @param {String} template_id Template ID of the task
 * @param {JSON} data Task content
 */
TaskTemplates.prototype.create_task_from_template = function (list_id, template_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/list/${list_id}/taskTemplate/${template_id}`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = TaskTemplates;
