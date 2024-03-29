const clickup_api = require("../../src/index");

async function main(){

	const Clickup = new clickup_api("access_token");
	var data = {
		"name": "New Team View Name",
		"type": "list",
		"grouping": {
			"field": "status",
			"dir": 1,
			"collapsed": [],
			"ignore": false
		},
		"divide": {
			"field": null,
			"dir": null,
			"collapsed": []
		},
		"sorting": {
			"fields": []
		},
		"filters": {
			"op": "AND",
			"fields": [],
			"search": "",
			"show_closed": false
		},
		"columns": {
			"fields": []
		},
		"team_sidebar": {
			"assignees": [],
			"assigned_comments": false,
			"unassigned_tasks": false
		},
		"settings": {
			"show_task_locations": false,
			"show_subtasks": 3,
			"show_subtask_parent_names": false,
			"show_closed_subtasks": false,
			"show_assignees": true,
			"show_images": true,
			"collapse_empty_columns": null,
			"me_comments": true,
			"me_subtasks": true,
			"me_checklists": true
		}
	}

	try{
		// Alias from new version(create_team_view) to older(get_team_view)
		var info = await Clickup.Views.create_workspace_view("team_id", data);
		console.log(info);
	}catch(err){
		console.log(err)
	}

}
main();
