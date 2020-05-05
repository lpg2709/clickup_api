const Cliclup = require("../../src/index");

async function main(){

	const clickup = new Cliclup("access_token");

	try{
		var info = await clickup.Tasks.get_task("task_id");
		console.log(info);
	}catch(err){
		console.log(err)
	}


}
main();
