const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"name": "New Space Name",
		"multiple_assignees": true,
		"features": {
			"due_dates": {
				"enabled": true,
				"start_date": false,
				"remap_due_dates": true,
				"remap_closed_due_date": false
			},

			"time_tracking": {
				"enabled": false
			},

			"tags": {
				"enabled": true
			},

			"time_estimates": {
				"enabled": true
			},

			"checklists": {
				"enabled": true
			},

			"custom_fields": {
				"enabled": true
			},

			"remap_dependencies": {
				"enabled": true
			},

			"dependency_warning": {
				"enabled": true
			},

			"portfolios": {
				"enabled": true
			}
		}
	}

	try {
		var info = await Clickup.Spaces.create_space("team_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
