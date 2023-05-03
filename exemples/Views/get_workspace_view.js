const clickup_api = require("../../src/index");

async function main(){

	const Clickup = new clickup_api("access_token");

	try{
		//Alias from new version (get_workspace_view) to older (get_team_view)
		var info = await Clickup.Views.get_workspace_view("team_id");
		console.log(info);
	}catch(err){
		console.log(err)
	}

}
main();
