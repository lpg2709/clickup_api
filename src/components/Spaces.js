const Requests = require("../utils/requests");

var Spaces = function (token) {
	this.token = token;
}
/**
 * Create a space
 * @param {String} team_id Team ID where the space how be created
 * @param {JSON} data Body request for space
 */
Spaces.prototype.create_space = function (team_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/team/${team_id}/space`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Update a space
 * @param {String} space_id Space ID to be updated
 * @param {JSON} data Body request for the update
 */
Spaces.prototype.update_space = function (space_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_put(`/api/v2/space/${space_id}`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Delete a space
 * @param {String} space_id Space to be deleted
 */
Spaces.prototype.delete_space = function (space_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_delete(`/api/v2/space/${space_id}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Get sapces
 * @param {String} team_id Team ID
 * @param {Boolean} archived Search in archived spaces
 */
Spaces.prototype.get_spaces = function (team_id, archived) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/team/${team_id}/space?archived=${archived}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Get info about a space
 * @param {String} space_id Space ID to be see
 */
Spaces.prototype.get_space = function (space_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/space/${space_id}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Spaces;
