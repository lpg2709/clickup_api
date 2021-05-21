const clickup_api = require("../../src/index");

async function main(){

	const Clickup = new clickup_api("access_token");

	var data = {
		  "email": "user@example.com",
		  "admin": true
	  }

	try{

		var info = await Clickup.Users.invite_user_to_workspace("team_id", data);
		console.log(info);
	}catch(err){
		console.log(err)
	}

}
main();
