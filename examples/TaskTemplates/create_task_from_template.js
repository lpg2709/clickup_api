const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"name": "New task name"
	}

	try {
		var info = await Clickup.TaskTemplates.create_task_from_template("list_id", "template_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
