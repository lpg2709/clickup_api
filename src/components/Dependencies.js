const Dependencie = require("../models/Dependencies");

var Dependencies = function (token) {
	this.token = token;
}

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
