const Goal = require("../models/Goals");

var Goals = function (token) {
	this.token = token;
}

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
