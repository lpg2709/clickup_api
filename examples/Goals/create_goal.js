const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"name": "Goal Name",
		"due_date": 1568036964079,
		"description": "Goal Description",
		"multiple_owners": true,
		"owners": [
		// 183
		],
		"color": "#32a852"
	}

	try {
		var info = await Clickup.Goals.create_goal("team_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
