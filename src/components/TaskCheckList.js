const Requests = require("../utils/requests");
const genParams = require("../utils/params");

var TaskCheckList = function (token) {
	this.token = token;
}
/**
 * Add a new checklist to a task.
 * @param {String} task_id Task ID for the new checklist
 * @param {JSON} param Parameters for checklist
 * @param {JSON} data Object for new checklist
 */
TaskCheckList.prototype.create_checklist = function (task_id, params, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			let param = genParams(params, ["task_id"], ["task_id"]);
			var res = await Requests.https_clickupapi_post(`/api/v2/task/${task_id}/checklist${param}`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Rename a task checklist, or reorder a checklist so it appears above or below other checklists on a task
 * @param {String} checklist_id Checklist ID to be updated
 * @param {JSON}  data Object for the update Checklist
 */
TaskCheckList.prototype.edit_checklist = function (checklist_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_put(`/api/v2/checklist/${checklist_id}`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Delete a checklist from a task.
 * @param {String} checklist_id Checklist to be deleted
 */
TaskCheckList.prototype.delete_checklist = function (checklist_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_delete(`/api/v2/checklist/${checklist_id}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Add a line item to a task checklist.
 * @param {String} checklist_id Checklist ID for the new item
 * @param {JSON} data Object with information for the new item
 */
TaskCheckList.prototype.create_checklist_item = function (checklist_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/checklist/${checklist_id}/checklist_item`, data);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Update an individual line item in a task checklist.
 * @param {String} checklist_id Task ID of reciver link
 * @param {String} checklist_item_id
 * @param {JSON}  data Parameters for link
 */
TaskCheckList.prototype.edit_checklist_item = function (checklist_id, checklist_item_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_put(`/api/v2/checklist/${checklist_id}/checklist_item/${checklist_item_id}`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Delete a line item from a task checklist.
 * @param {String} checklist_id Checklist where the item are
 * @param {String} checklist_item_id Checklist item do be deleted
 */
TaskCheckList.prototype.delete_checklist_item = function (checklist_id, checklist_item_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_delete(`/api/v2/checklist/${checklist_id}/checklist_item/${checklist_item_id}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = TaskCheckList;
