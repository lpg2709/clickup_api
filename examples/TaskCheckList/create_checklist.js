const clickup_api = require("../../src/index");

(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		name: "TODO"
	}
	var params = {
		custom_task_ids: true,
		team_id: "team_id" // Only used when the custom_task_ids parameter is set to true.
	}

	try {
		var info = await Clickup.TaskCheckList.create_checklist("task_id", params, data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
