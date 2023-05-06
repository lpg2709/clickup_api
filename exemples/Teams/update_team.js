const clickup_api = require("../../src/index");

(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"name": "New User Group Name",
		"handle": "newusergroupname",
		"members": {
			"add": [

				123456,
				987654
			],
			"rem": [
				159753
			]
		}
	};

	try {
		var info = await Clickup.Teams.update_team("group_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
