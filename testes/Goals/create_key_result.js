const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"name": "New Key Result Name",
		"owners": [
		// 183
		],
		"type": "number",
		"steps_start": 0,
		"steps_end": 10,
		"unit": "km",
		"task_ids": [],
		"list_ids": []
	}

	try {
		var info = await Clickup.Goals.create_key_result("goal_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
