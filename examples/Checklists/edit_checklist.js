const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data ={
		"name": "Updated Checklist",
		"position": 1
	}

	try {
		var info = await Clickup.Checklists.edit_checklist("checklist_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
