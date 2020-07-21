const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	try {
		var info = await Clickup.TaskTemplates.get_task_templates("team_id", 0);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
