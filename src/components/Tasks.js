const Task = require("../models/Tasks")

var Tasks = function (token) {
	this.token = token;
}

Tasks.prototype.cretae_task = function (list_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Task.create_taks(list_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Tasks.prototype.update_task = function (task_id, data) {
	token = this.token
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Task.update_task(task_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Tasks.prototype.delete_task = function (task_id) {
	token = this.token
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Task.delete_task(task_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Tasks.prototype.get_task = function (task_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Task.get_task(task_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Tasks.prototype.get_tasks = function (params) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Task.get_tasks(params, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Tasks.prototype.get_team_tasks = function (params) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Task.get_team_tasks(params, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Tasks;
