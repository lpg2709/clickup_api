const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"name": "Updated Checklist Item",
		"assignee": null,
		"resolved": true,
		"parent": null
	}

	try {
		var info = await Clickup.Checklists.edit_checklist_item("checklist_id", "checklist_item_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
