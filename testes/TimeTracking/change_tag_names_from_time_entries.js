const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"name": "old tag name",
		"new_name": "new tag name",
		"tag_bg": "#000000",
		"tag_fg": "#000000"
	};

	try {
		var info = await Clickup.TimeTracking.change_tag_names_from_time_entries("team_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
