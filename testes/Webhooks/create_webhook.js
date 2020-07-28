const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"endpoint": "https://yourdomain.com/webhook",
		"events": [
			"taskCreated",
			"taskUpdated",
			"taskDeleted",
			"listCreated",
			"listUpdated",
			"listDeleted",
			"folderCreated",
			"folderUpdated",
			"folderDeleted",
			"spaceCreated",
			"spaceUpdated",
			"spaceDeleted",
			"goalCreated",
			"goalUpdated",
			"goalDeleted",
			"keyResultCreated",
			"keyResultUpdated",
			"keyResultDeleted"
		]
	}

	try {
		var info = await Clickup.Webhooks.create_webhook("team_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
