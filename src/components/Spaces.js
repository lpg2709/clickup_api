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


module.exports = Spaces;
