const Requests = require("../utils/requests");
const genParams = require("../utils/params");

var Roles = function(token){
	this.token = token;
}
/**
 * Get all tags in space
 * @param {team_id} Required
 * @param {String} include_members boolean
 */
Roles.prototype.get_custom_roles = function(team_id, params){
	var token = this.token;
	let param = genParams(params, ["team_id"], ["team_id"]);
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/team/${team_id}/customroles${param}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Roles;
