const Requests = require("../utils/requests");

var Users = function (token) {
	this.token = token;
}

/**
 * Invite User To Workspace
 * @param {String} team_id Team ID where the user is gone be invited
 * @param {JSON} data Body request for User
 */
Users.prototype.invite_user_to_workspace = function (team_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/team/${team_id}/user`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

/**
 * Edit User On Workspace
 * @param {String} team_id Team ID where the user is gone be updated
 * @param {String} user_id User ID to be updated
 * @param {JSON} data Body request for User
 */
Users.prototype.edit_user_on_workspace = function (team_id, user_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_put(`/api/v2/team/${team_id}/user/${user_id}`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

/**
 * Remove User From Workspace
 * @param {String} team_id Team ID where the user is gone be deleted
 * @param {String} user_id User ID to be deleted
 */
Users.prototype.remove_user_from_workspace = function (team_id, user_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_delete(`/api/v2/team/${team_id}/user/${user_id}`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

/**
 * Get User
 * @param {String} team_id Team ID where the user are
 * @param {String} user_id User ID to be returned
 */
Users.prototype.get_user = function (team_id, user_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/team/${team_id}/user/${user_id}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Users;
