const Requests = require("../utils/requests");

var Members = function (token) {
	this.token = token;
}
/**
 * Get members on task.
 * @param {String} task_id Task ID
 */
Members.prototype.get_task_members = function (task_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/task/${task_id}/member`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Get members on a list.
 * @param {String} list_id List ID
 */
Members.prototype.get_list_members = function (list_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/list/${list_id}/member`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Members;
