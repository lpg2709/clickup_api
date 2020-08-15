const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	try {
		var info = await Clickup.TimeTracking.change_tag_names_from_time_entries("team_id");
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
