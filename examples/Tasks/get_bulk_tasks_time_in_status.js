const clickup_api = require("../../src/index");

async function main(){

	const clickup = new clickup_api("access_token");

	var param = {
		"task_ids": ["123", "321"],
//      "custom_task_ids": "0",
// 		"team_id": "123",
	}

	try{
		var info = await clickup.Tasks.get_tasks_time_in_status(param);
		console.log(info);
	}catch(err){
		console.log(err)
	}


}
main();
