const Request = require("../utils/requests");

var Authorization = function (token) {
	this.token.token;
}

Authorization.prototype.get_access_token = function(client_id, client_secret, code) {
	token = this.token;
	return new Promise(async function(resolve, reject){
		try {
			var res = await Request.https_clickupapi_post(`/api/v2/user`);
			resolve(res)
		} catch (err) {
			reject(err);
		}
	});
}


/**
 * Get the user that belongs to this token.
 */
Authorization.prototype.get_authorized_user = function() {
	token = this.token;
	return new Promise(async function(resolve, reject){
		try {
			var res = await Request.https_clickupapi_get(`/api/v2/user`, token);
			resolve(res)
		} catch (err) {
			reject(err);
		}
	});
}

/**
 * Get the authorized teams (Workspaces) for the authenticated user.
 */
Authorization.prototype.get_authorized_teams = function() {
	token = this.token;
	return new Promise(async function(resolve, reject){
		try {
			var res = await Request.https_clickupapi_get(`/api/v2/team`, token);
			resolve(res)
		} catch (err) {
			reject(err);
		}
	});
}
