const clickup_api = require("../../src/index");

async function main(){

	const Clickup = new clickup_api("access_token");

	try{

		var info = await Clickup.Views.get_folder_view("folder_id");
		console.log(info);
	}catch(err){
		console.log(err)
	}

}
main();
