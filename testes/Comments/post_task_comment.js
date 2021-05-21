const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"comment_text": "Task comment content",
		// "assignee": 183,
		"notify_all": true
	}

	try {
		var info = await Clickup.Comments.create_task_comment("task_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
