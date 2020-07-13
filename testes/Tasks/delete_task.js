const clickup_api = require("../../src/index");

async function main(){

	const clickup = new clickup_api("access_token");

	try{
		var info = await clickup.Tasks.delete_task("task_id");
		console.log(info);
	}catch(err){
		console.log(err)
	}


}
main();
