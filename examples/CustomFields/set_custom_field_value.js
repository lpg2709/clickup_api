const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"value": 80
	}

	try {
		var info = await Clickup.CustomFields.set_custom_field_value("task_id", "field_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
