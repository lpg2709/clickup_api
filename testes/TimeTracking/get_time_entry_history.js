const clickup_api = require("../../src/index");

(async function main() {
	const Clickup = new clickup_api("access_token");

	try {
		var info = await Clickup.TimeTracking.get_time_entry_history("team_id", "timer_id");
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
