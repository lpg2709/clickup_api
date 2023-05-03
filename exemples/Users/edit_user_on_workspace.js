const clickup_api = require("../../src/index");

async function main(){

	const Clickup = new clickup_api("access_token");

	var data = {
		  "username": "User Name",
		  "admin": false
	  }

	try{
		var info = await Clickup.Users.edit_user_on_workspace("team_id", "user_id", data);
		console.log(info);
	}catch(err){
		console.log(err)
	}

}
main();
