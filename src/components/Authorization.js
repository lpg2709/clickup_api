const Request = require("../utils/requests");

var Authorization = function (token, request) {
	this.token = token;
	this.request = request;
};

Authorization.prototype.get_access_token = function (
	client_id,
	client_secret,
	code
) {
	var token = this.token;
	var request = this.request;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await request.https_clickupapi_post(`/api/v2/user`);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
};

/**
 * Get the user that belongs to this token.
 */
Authorization.prototype.get_authorized_user = function () {
	var token = this.token;
	var request = this.request;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await request.https_clickupapi_get(`/api/v2/user`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
};

/**
 * Get the authorized teams (Workspaces) for the authenticated user.
 */
Authorization.prototype.get_authorized_teams = function () {
	var token = this.token;
	var request = this.request;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await request.https_clickupapi_get(`/api/v2/team`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
};
