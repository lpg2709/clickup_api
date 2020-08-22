const View = require("../models/Views")

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
			var res = await View.create_team_view(team_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Create a view for space
 * @param {String} space_id Space ID where the view be created
 * @param {JSON} data Body request for create a view
 */
Views.prototype.create_space_view = function (space_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await View.create_space_view(space_id, data, token);
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
			var res = await View.create_folder_view(folder_id, data, token);
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
			var res = await View.create_list_view(list_id, data, token);
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
			var res = await View.update_view(view_id, data, token);
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
			var res = await View.delete_view(view_id, token);
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
			var res = await View.get_team_view(team_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Get view from space
 * @param {String} space_id Space ID
 */
Views.prototype.get_space_view = function (space_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await View.get_space_view(space_id, token);
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
			var res = await View.get_folder_view(folder_id, token);
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
			var res = await View.get_list_view(list_id, token);
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
			var res = await View.get_view(view_id, token);
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
			var res = await View.get_view_tasks(view_id, page, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports =  Views;
