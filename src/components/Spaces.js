const Space = require("../models/Spaces");

var Spaces = function (token) {
	this.token = token;
}

Spaces.prototype.create_space = function (team_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Space.create_space(team_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Spaces.prototype.update_space = function (space_id, data){
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Space.update_space(space_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Spaces.prototype.delete_space = function (space_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Space.delete_space(space_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Spaces.prototype.get_spaces = function (team_id, archived) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Space.get_spaces(team_id, archived, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Spaces.prototype.get_space = function (space_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Space.get_space(space_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Spaces;
