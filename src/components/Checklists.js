const Requests = require("../utils/requests");

var Checklists = function (token) {
	this.token = token;
}
/**
 * Create a checklist in a task.
 * @param {String} task_id Task that receives the Checklist
 * @param {JSON} data Body request for the Checklist
 */
Checklists.prototype.create_checklist = function (task_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/task/${task_id}/checklist`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Edit a checklist.
 * @param {String} checklist_id Checklist id to be updated
 * @param {JSON} data Body request for the update
 */
Checklists.prototype.edit_checklist = function (checklist_id, data) {
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
 * Delete checklist.
 * @param {String} checklist_id Checklist ID to delete
 */
Checklists.prototype.delete_checklist = function (checklist_id) {
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
 * Create a checklist intem.
 * @param {String} checklist_id Checklist ID to create a item
 * @param {JSON} data Contenet of the item
 */
Checklists.prototype.create_checklist_item = function (checklist_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/checklist/${checklist_id}/checklist_item`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Update an item from the checklist
 * @param {String} checklist_id Checklist ID that contains the item
 * @param {String} checklist_item_id Item to be updated
 * @param {JSON} data Update content
 */
Checklists.prototype.edit_checklist_item = function (checklist_id, checklist_item_id, data) {
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
 * Deletes an item from the checklist
 * @param {String} checklist_id Checklist ID that contains the item
 * @param {String} checklist_item_id Item to be deleted
 */
Checklists.prototype.delete_checklist_item = function (checklist_id, checklist_item_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_delete(`/api/v2/checklist/${checklist_id}/checklist_item/${checklist_item_id}`, token)
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Checklists;
