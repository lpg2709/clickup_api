const clickup_api = require("../../src/index");

async function main(){

	const clickup = new clickup_api("access_token");

	var param = {
		"team_Id": "123",
		"page": "0",
// 		"order_by": "",
// 		"reverse": "",
// 		"subtasks": "",
// 		"space_ids[]": "",
// 		"project_ids[]": "",
// 		"list_ids[]": "",
// 		"statuses[]": "",
// 		"include_closed": "",
// 		"assignees[]": "",
// 		"tags[]": "",
// 		"due_date_gt": "",
// 		"due_date_lt": "",
// 		"date_created_gt": "",
// 		"date_created_lt": "",
// 		"date_updated_gt": "",
// 		"date_updated_lt": "",
// 		"custom_fields[]": "",
// 		"custom_task_ids": "",
// 		"team_id": "",
	}

	try{
		var info = await clickup.Tasks.get_filtered_team_tasks(param);
		console.log(info);
	}catch(err){
		console.log(err)
	}


}
main();
