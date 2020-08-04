const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data =
	{
		"name": "Checklist"
	}

	try {
		var info = await Clickup.Checklists.create_checklist("task_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
