const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"time_entry_ids": [
			"timer_id"
		],
		"tags": [
			"name of tags"
		]
	};

	try {
		var info = await Clickup.TimeTracking.add_tags_from_time_entries("team_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
