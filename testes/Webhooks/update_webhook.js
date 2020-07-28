const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"endpoint": "https://yourdomain.com/webhook",
		"events": [
			"taskCreated"
		]
	}

	try {
		var info = await Clickup.Webhooks.update_webhook("webhook_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
