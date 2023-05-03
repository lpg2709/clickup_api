const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"description": "",
		"tags": [
			"name of tags"
		],
		"tag_action": "add",
		"start": 1595289395842,
		"end": 1595289495842,
		"tid": "task_id",
		"billable": true,
		"duration": 100000
	};

	try {
		var info = await Clickup.TimeTracking.update_time_entry("team_id", "timer_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
