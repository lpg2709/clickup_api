const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	try {
		var info = await Clickup.Checklists.delete_checklist_item("checklist_id", "checklist_item_id");
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
