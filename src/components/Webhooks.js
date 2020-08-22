const Webhook = require("../models/Webhooks");

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
			var res = await Webhook.create_webhook(team_id, data, token);
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
			var res = await Webhook.update_webhook(webhook_id, data, token);
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
			var res = await Webhook.delete_webhook(webhook_id, token);
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
			var res = await Webhook.get_webhook(team_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Webhooks;
