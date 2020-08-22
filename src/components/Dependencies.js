const Dependencie = require("../models/Dependencies");

var Dependencies = function (token) {
	this.token = token;
}
/**
 * Add dependency
 * @param {String} task_id Task ID to add dependency
 * @param {JSON} data Dependency content
 */
Dependencies.prototype.add_dependency = function (task_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Dependencie.add_dependency(task_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Delete a dependency
 * @param {String} task_id Task ID that receives dependencies
 * @param {String} depends_on Task ID
 * @param {String } dependency_of Task ID
 */
Dependencies.prototype.delete_dependency = function (task_id, depends_on, dependency_of) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Dependencie.delete_dependency(task_id, depends_on, dependency_of, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Add a link between two tasks
 * @param {String} task_id Task ID that recive the link
 * @param {String} links_to Task ID of the other task
 */
Dependencies.prototype.add_task_link = function (task_id, links_to) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Dependencie.add_task_link(task_id, links_to, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Remove the link
 * @param {String} task_id Task ID that be remove the link
 * @param {String} links_to Task ID to be removed
 */
Dependencies.prototype.delete_task_link = function (task_id, links_to) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Dependencie.delete_task_link(task_id, links_to, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}


module.exports = Dependencies;
