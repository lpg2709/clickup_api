const Requests = require("../utils/requests");

var Views = function (token) {
	this.token = token;
}
/**
 * Create a view for team
 * @param {String} team_id Team ID where the view be created
 * @param {JSON} data Body request for create a view
 */
Views.prototype.create_team_view = function (team_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/team/${team_id}/view`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Create a view for team
 * Alias from new version(create_team_view) to older(get_team_view)
 * @param {String} team_id Team ID where the view be created
 * @param {JSON} data Body request for create a view
 */
Views.prototype.create_workspace_view = Views.prototype.create_team_view;

/**
 * Create a view for space
 * @param {String} space_id Space ID where the view be created
 * @param {JSON} data Body request for create a view
 */
Views.prototype.create_space_view = function (space_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/space/${space_id}/view`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Create a view for folder
 * @param {String} folder_id Folder ID where the view be created
 * @param {JSON} data Body request for create a view
 */
Views.prototype.create_folder_view = function (folder_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/folder/${folder_id}/view`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Create a view for list
 * @param {String} list_id List ID where the view be created
 * @param {JSON} data Body request for create a view
 */
Views.prototype.create_list_view = function (list_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/list/${list_id}/view`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Update a view
 * @param {String} view_id View ID to be updated
 * @param {JSON} data Body request for update a view
 */
Views.prototype.update_view = function (view_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_put(`/api/v2/view/${view_id}`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Delete a view
 * @param {String} view_id View ID to be deleted
 */
Views.prototype.delete_view = function (view_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_delete(`/api/v2/view/${view_id}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Get view from team
 * @param {String} team_id Team ID
 */
Views.prototype.get_team_view = function (team_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/team/${team_id}/view`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Get view from team
 * Alias from new version (get_workspace_view) to older (get_team_view)
 * @param {String} team_id Team ID
 */
Views.prototype.get_workspace_view = Views.prototype.get_team_view;

/**
 * Get view from space
 * @param {String} space_id Space ID
 */
Views.prototype.get_space_view = function (space_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/space/${space_id}/view`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Get view from folder
 * @param {String} folder_id Folder ID
 */
Views.prototype.get_folder_view = function (folder_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/folder/${folder_id}/view`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Get view from list
 * @param {String} list_id List ID
 */
Views.prototype.get_list_view = function (list_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/list/${list_id}/view`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Get info about a view
 * @param {String} view_id View ID
 */
Views.prototype.get_view = function (view_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/view/${view_id}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 *	Get view tasks
 * @param {String} view_id View ID
 * @param {INT} page Index of a page
 */
Views.prototype.get_view_tasks = function (view_id, page) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/view/${view_id}/task?page=${page}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Views;
