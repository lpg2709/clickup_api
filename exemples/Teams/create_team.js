const clickup_api = require("../../src/index");

(async function main() {
	const Clickup = new clickup_api("access_token");
	var data = {
		"name": "New team name",
		"members": [
			123456,
			987654
		]
	};

	try {
		var info = await Clickup.Teams.create_team("team_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
