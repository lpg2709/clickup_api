const Goal = require("../models/Goals");

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
			var res = await Goal.create_goal(team_id, data, token)
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
			var res = await Goal.update_goal(goal_id, data, token);
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
			var res = await Goal.delete_goal(goal_id, token);
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
			var res = await Goal.get_goals(team_id, token);
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
			var res = await Goal.get_goal(goal_id, token);
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
			var res = await Goal.create_key_result(goal_id, data, token)
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
			var res = await Goal.edit_key_result(key_result_id, data, token);
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
			var res = await Goal.delete_key_result(key_result_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Goals;
