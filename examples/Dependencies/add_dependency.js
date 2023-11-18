const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"depends_on": "9hw"
	}

	try {
		var info = await Clickup.Dependencies.add_dependency("task_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
