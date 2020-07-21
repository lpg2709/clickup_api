const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"name": "New List Name",
		"content": "New List Content",
		"due_date": 1567780450202,
		"due_date_time": false,
		"priority": 1,
		// "assignee": 183,
		"status": "red"
	}

	try {
		var info = await Clickup.Lists.create_list("folder_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
