const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	try {
		var info = await Clickup.Dependencies.delete_task_link("task_id", "links_to");
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
