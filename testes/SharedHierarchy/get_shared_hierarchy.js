const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	try {
		var info = await Clickup.SharedHierarchy.get_shared_hierarchy("team_id");
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
