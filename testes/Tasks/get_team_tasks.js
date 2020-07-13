const clickup_api = require("../../src/index");

async function main() {

	const clickup = new clickup_api("access_token");
	var param = {
		"team_id": "team_id",
		"page": 0,
		// "order_by": "created",
		// "reverse": false,
		// "subtasks": false,
		// "space_ids[]": [],
		// "project_ids[]": [],
		// "list_ids[]":[],
		// "statuses[]": [],
		// "include_closed": false,
		// "assignees[]": [],
		// "tags[]":[],
		// "due_date_gt": 123,
		// "due_date_lt": 123,
		// "date_created_gt": 123,
		// "date_created_lt": 123,
		// "date_updated_gt": 123,
		// "date_updated_lt": 123
	}

	try {
		var info = await clickup.Tasks.get_team_tasks(param);
		console.log(info);
	} catch (err) {
		console.log(err)
	}


}
main();
