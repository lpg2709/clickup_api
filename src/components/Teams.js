const Requests = require("../utils/requests");

var Teams = function (token) {
	this.token = token;
}

/**
 * Create a Team
 * @param {String} team_id Team ID on Workspace
 * @param {JSON} data Body request for Team
 */
Teams.prototype.create_team = function (team_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/team/${team_id}/group`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

/**
 * Update a Team
 * @param {String} group_id Group ID
 * @param {JSON} data Body request for Team
 */
Teams.prototype.update_team = function (group_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_put(`/api/v2/group/${group_id}`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

/**
 * Update Team
 * @param {String} group_id Group ID to be delete
 */
Teams.prototype.delete_team = function (group_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_delete(`/api/v2/group/${group_id}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

/**
 * Return all teams
 */
Teams.prototype.get_teams = function () {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/team`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

/**
 * View the used, total, and available member and guest seats for a Workspace.
 * @param {String} team_id
 */
Teams.prototype.get_workspace_seats = function (team_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/team/${team_id}/seats`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Teams;
