const Requests = require("../utils/requests");
const genParams = require("../utils/params");

var Tasks = function (token) {
	this.token = token;
}
/**
 * Create a Task
 * @param {String} list_id List ID where task be created
 * @param {JSON} data Body request for Task
 */
Tasks.prototype.create_task = function (list_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/list/${list_id}/task`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Update a Task
 * @param {String} task_id Task ID to be updated
 * @param {JSON} data Body request for update
 */
Tasks.prototype.update_task = function (task_id, data) {
	token = this.token
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_put(`/api/v2/task/${task_id}`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Delete a Task
 * @param {String} task_id Task ID to be deleted
 */
Tasks.prototype.delete_task = function (task_id) {
	token = this.token
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_delete(`/api/v2/task/${task_id}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Get info about a Task
 * @param {String} task_id Task ID
 */
Tasks.prototype.get_task = function (params) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			let param = genParams(params, ["task_id"], ["task_id"]);
			var res = await Requests.https_clickupapi_get(`/api/v2/task/${params.task_id}${param}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Get Tasks
 * @param {JSON} params Request parameters in JSON format
 */
Tasks.prototype.get_tasks = function (params) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			let param = genParams(params, ["list_id"], ["list_id"]);
			var res = await Requests.https_clickupapi_get(`/api/v2/list/${params.list_id}/task${param}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

/**
 * Get Filtered Team Tasks
 * @param {JSON} params Request parameters in JSON format
 */
Tasks.prototype.get_filtered_team_tasks  = function (params) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			let param = genParams(params, ["team_Id"], ["team_Id"]);
			var res = await Requests.https_clickupapi_get(`/api/v2/team/${params.team_id}/task${param}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

/**
 * Get Task's Time in Status
 * @param {JSON} params Request parameters in JSON format
 */
Tasks.prototype.get_tasks_time_in_status = function (params) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			let param = genParams(params, ["task_id"], ["task_id"]);
			var res = await Requests.https_clickupapi_get(`/api/v2/task/${params.task_id}/time_in_status${param}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

/**
 * Get Bulk Task's Time in Status
 * @param {JSON} params Request parameters in JSON format
 */
Tasks.prototype.get_bulk_tasks_time_in_status = function (params) {
	// If thers some bug, is because i can't test in my plan :(
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			let param = genParams(params, ["task_ids"], ["task_ids"]);
			let tasks_ids = "?";
			params["task_ids"].forEach((e) => {
				tasks_ids += `task_ids=${e}&`;
			})
			tasks_ids = tasks_ids.slice(0, -1);
			param = param.replace("?", "");
			var res = await Requests.https_clickupapi_get(`/api/v2/task/bulk_time_in_status/task_ids${tasks_ids}${param}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

/**
 * Get Tasks from a team
 * @param {JSON} params Request parameters in JSON format
 */

Tasks.prototype.get_team_tasks = function (params) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			let param = genParams(params, ["list_id", "archived"]);
			var res = await Requests.https_clickupapi_get(`/api/v2/team/${params.team_id}/task?${param}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Tasks;
