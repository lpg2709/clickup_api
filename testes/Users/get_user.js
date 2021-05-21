const clickup_api = require("../../src/index");

async function main(){

	const Clickup = new clickup_api("access_token");

	try{
		var info = await Clickup.Users.get_user("team_id", "user_id");
		console.log(info);
	}catch(err){
		console.log(err)
	}

}
main();
