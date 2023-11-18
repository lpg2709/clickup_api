const clickup_api = require("../../src/index");

(async function main() {
	const Clickup = new clickup_api("access_token");

	var params = {
		depends_on: "string",
		dependency_of: "string",
		//custom_task_ids: true,
		//team_id: "team_id" // Only used when the custom_task_ids parameter is set to true.
	}

	try {
		var info = await Clickup.TaskRelationships.delete_dependency("task_id", params);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
