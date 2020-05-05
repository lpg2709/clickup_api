const Cliclup = require("../../src/index");

async function main(){

	const clickup = new Cliclup("access_token");
	var data = {
		"name": "New Task Name Update",
		"content": "New Task Content",
		"status": "Closed"
	}

	try{
		var info = await clickup.Tasks.update_task("task_id", data);
		console.log(info);
	}catch(err){
		console.log(err)
	}


}
main();
