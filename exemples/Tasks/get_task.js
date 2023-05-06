const clickup_api = require("../../src/index");

async function main(){

	const clickup = new clickup_api("access_token");

	var param = {
		"task_id": "list_id",
		// "custom_task_ids": true,
		// "team_id": "123",
		// "include_subtasks": true
	}

	try{
		var info = await clickup.Tasks.get_task(param);
		console.log(info);
	}catch(err){
		console.log(err)
	}


}
main();
