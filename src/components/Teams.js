const Requests = require("../utils/requests");

var Teams = function (token) {
	this.token = token;
}
/**
 * See all teams
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


module.exports = Teams;
