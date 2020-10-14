const Requests = require("../utils/requests");

var Webhooks = function (token) {
	this.token = token;
}
/**
 * Create a webhook
 * @param {String} team_id Team where the webhook be created
 * @param {JSON} data Body request for webhook
 */
Webhooks.prototype.create_webhook = function (team_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/team/${team_id}/webhook`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Update a webhook
 * @param {String} webhook_id Webhook how be updated
 * @param {JSON} data Body request for update
 */
Webhooks.prototype.update_webhook = function (webhook_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_put(`/api/v2/webhook/${webhook_id}`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Delete a webhook
 * @param {String} webhook_id Webhook how be deleted
 */
Webhooks.prototype.delete_webhook = function (webhook_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_delete(`/api/v2/webhook/${webhook_id}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Get all webhooks
 * @param {String} team_id Team ID
 */
Webhooks.prototype.get_webhook = function (team_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/team/${team_id}/webhook`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Webhooks;
