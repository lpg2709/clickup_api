const clickup_api = require("../../src/index");

async function main(){

	const Clickup = new clickup_api("access_token");
	var data = {
		"name": "New Task Name",
		"content": "New Task Content",
		"status": "Open"
	  }

	try{

		var info = await Clickup.Tasks.create_task("list_id", data);
		console.log(info);
	}catch(err){
		console.log(err)
	}

}
main();
