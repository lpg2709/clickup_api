const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"name": "Updated List Name",
		"content": "Updated List Content",
		"due_date": 1567780450202,
		"due_date_time": true,
		"priority": 2,
		"assignee": "none",
		"unset_status": true
	}

	try {
		var info = await Clickup.Lists.update_list("list_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
