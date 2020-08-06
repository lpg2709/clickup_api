const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"steps_current": 5,
		"note": "Target achieved"
	}

	try {
		var info = await Clickup.Goals.edit_key_result("key_result_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
