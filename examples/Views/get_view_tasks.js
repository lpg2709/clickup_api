const clickup_api = require("../../src/index");

async function main(){

	const Clickup = new clickup_api("access_token");

	try{

		var info = await Clickup.Views.get_view_tasks("view_id", 0);
		console.log(info);
	}catch(err){
		console.log(err)
	}

}
main();
