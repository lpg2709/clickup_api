const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	try {
		var info = await Clickup.Comments.get_list_comment("list_id");
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
