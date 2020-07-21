const Team = require("../models/Teams")

var Teams = function (token) {
	this.token = token;
}

Teams.prototype.get_teams = function () {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Team.get_teams(token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}


module.exports = Teams;
