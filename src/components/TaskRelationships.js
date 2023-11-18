const Requests = require("../utils/requests");
const genParams = require("../utils/params");

var TaskRelationships = function (token) {
	this.token = token;
}
/**
 * Set a task as waiting on or blocking another task.
 * @param {String} task_id Task ID to recive the dependency
 * @param {JSON} param Parameters for dependency
 * @param {JSON} data Dependency informatis
 */
TaskRelationships.prototype.add_dependency = function (task_id, params, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			let param = genParams(params, ["task_id"], ["task_id"]);
			var res = await Requests.https_clickupapi_post(`/api/v2/task/${task_id}/dependency${param}`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Remove the dependency relationship between two or more tasks.
 * @param {String} task_id Task ID to remove dependency
 * @param {JSON}  param Parameters for dependency
 */
TaskRelationships.prototype.delete_dependency = function (task_id, params) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			let param = genParams(params, ["task_id","depends_on", "dependency_of"], ["task_id"]);
			var res = await Requests.https_clickupapi_delete(`/api/v2/task/${task_id}/dependency${param}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Link two tasks together.
 * @param {String} task_id Task ID of reciver link
 * @param {String} links_to
 * @param {JSON}  param Parameters for link
 */
TaskRelationships.prototype.add_task_link = function (task_id, links_to, params) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			let param = genParams(params, ["task_id", "links_to"], ["task_id", "links_to"]);
			var res = await Requests.https_clickupapi_post(`/api/v2/task/${task_id}/link/${links_to}${param}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Remove the link between two tasks.
 * @param {String} task_id Task ID of reciver link
 * @param {String} links_to
 * @param {JSON}  param Parameters for link
 */
TaskRelationships.prototype.delete_task_link = function (task_id, links_to, params) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			let param = genParams(params, ["task_id", "links_to"], ["task_id", "links_to"]);
			var res = await Requests.https_clickupapi_delete(`/api/v2/task/${task_id}/link/${links_to}${param}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = TaskRelationships;
