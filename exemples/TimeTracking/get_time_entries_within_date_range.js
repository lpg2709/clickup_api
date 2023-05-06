const clickup_api = require("../../src/index");

(async function main() {
	const Clickup = new clickup_api("access_token");

	var params = {
		team_id: "team_id",
		// start_date: "1000",
		// end_date: "1000",
		// assignee: "",
	}

	try {
		var info = await Clickup.TimeTracking.get_time_entries_within_date_range(params);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
