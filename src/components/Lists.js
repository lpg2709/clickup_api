const Requests = require("../utils/requests");

var Lists = function (token) {
	this.token = token;
}
/**
 * Create a list
 * @param {String} folder_id Folder id where a list be created
 * @param {JSON} data Body request for create a list
 */
Lists.prototype.create_list = function (folder_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/folder/${folder_id}/list`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Create a list without a folder
 * @param {String} space_id Space ID where a list be created
 * @param {JSON} data Body request for create a list
 */
Lists.prototype.create_folderless_list = function (space_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/space/${space_id}/list`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Update a list
 * @param {String} list_id List ID to be updated
 * @param {JSON} data Body request for update a list
 */
Lists.prototype.update_list = function (list_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_put(`/api/v2/list/${list_id}`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Delete a list
 * @param {String} list_id List ID to be deleted
 */
Lists.prototype.delete_list = function (list_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_delete(`/api/v2/list/${list_id}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 *	Get lists from a folder
 * @param {String} folder_id Folder ID
 * @param {Boolean} archived Search in archived folders
 */
Lists.prototype.get_lists = function (folder_id, archived) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/folder/${folder_id}/list?archived=${archived}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Get lists from a space
 * @param {String} space_id Space ID
 * @param {Boolean} archived Search in archived spaces
 */
Lists.prototype.get_folderless_lists = function (space_id, archived) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/space/${space_id}/list?archived=${archived}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Get info about a list
 * @param {String} list_id List ID for informations
 */
Lists.prototype.get_list = function (list_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/list/${list_id}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Add a task to an additional List
 * @param {String} list_id List ID
 * @param {String} task_id Task ID
 */
 Lists.prototype.add_task_to_list = function (list_id, task_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/list/${list_id}/task/${task_id}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Remove Task From List
 * @param {String} list_id List ID where task on
 * @param {String} task_id Task ID to be deleted
 */
Lists.prototype.remove_task_from_list = function (list_id, task_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_delete(`/api/v2/list/${list_id}/task/${task_id}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Lists;
