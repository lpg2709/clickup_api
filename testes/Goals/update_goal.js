const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"name": "Updated Goal Name",
		"due_date": 1568036964079,
		"description": "Updated Goal Description",
		"rem_owners": [/*183*/],
		"add_owners": [/*182*/],
		"color": "#32a852"
	}

	try {
		var info = await Clickup.Goals.update_goal("goal_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
