const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"name": "Checklist Item",
		// "assignee": 183
	}

	try {
		var info = await Clickup.Checklists.create_checklist_item("checklist_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
