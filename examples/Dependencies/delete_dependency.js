const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	try {
		var info = await Clickup.Dependencies.delete_dependency("task_id", "depends_on", "dependency_of");
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
