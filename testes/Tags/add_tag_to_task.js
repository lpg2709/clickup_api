const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");
	try {
		var info = await Clickup.Tags.add_tag_to_task("task_id", "tag_name");
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
