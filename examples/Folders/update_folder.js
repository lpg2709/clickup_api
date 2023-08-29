const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"name": "Updated Space Name",
		"multiple_assignees": false,
		"features": {
			"due_dates": {
				"enabled": false,
				"start_date": false,
				"remap_due_dates": false,
				"remap_closed_due_date": false
			},
			"time_tracking": {
				"enabled": false
			},
			"tags": {
				"enabled": false
			},
			"time_estimates": {
				"enabled": false
			},
			"checklists": {
				"enabled": true
			},
			"custom_fields": {
				"enabled": true
			},
			"remap_dependencies": {
				"enabled": false
			},
			"dependency_warning": {
				"enabled": false
			},
			"portfolios": {
				"enabled": false
			}
		}
	}

	try {
		var info = await Clickup.Folders.update_folder("folder_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
