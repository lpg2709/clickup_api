const Requests = require("../utils/requests");

var Goals = function (token) {
	this.token = token;
}
/**
 * Create a goal
 * @param {String} team_id Team ID where goal be created
 * @param {JSON} data Body request for goal
 */
Goals.prototype.create_goal = function (team_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/team/${team_id}/goal`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Update a goal
 * @param {String} goal_id Goal ID to be updated
 * @param {JSON} data Body request for goal
 */
Goals.prototype.update_goal = function (goal_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_put(`/api/v2/goal/${goal_id}`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Delete a Goal
 * @param {String} goal_id Goal ID to be deleted
 */
Goals.prototype.delete_goal = function (goal_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_delete(`/api/v2/goal/${goal_id}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Get all goals of a team
 * @param {String} team_id Team ID where search
 */
Goals.prototype.get_goals = function (team_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/team/${team_id}/goal`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Get info about a goal
 * @param {String} goal_id Goal ID to get info
 */
Goals.prototype.get_goal = function (goal_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/goal/${goal_id}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Create a key result
 * @param {String} goal_id Goal ID where key be created
 * @param {JSON} data Body request for create a key
 */
Goals.prototype.create_key_result = function (goal_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/goal/${goal_id}/key_result`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Update a key result
 * @param {String} key_result_id Key result ID to be updated
 * @param {JSON} data Body request for update a key
 */
Goals.prototype.edit_key_result = function (key_result_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_put(`/api/v2/key_result/${key_result_id}`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Delete a key result
 * @param {String} key_result_id Key result ID to be deleted
 */
Goals.prototype.delete_key_result = function (key_result_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_delete(`/api/v2/key_result/${key_result_id}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Goals;
