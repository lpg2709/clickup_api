const clickup_api = require("../../src/index");

(async function main() {
	const Clickup = new clickup_api("access_token");
	var param = {
		"start": 514905825000, // Unix time in milliseconds
		"start_id": "comment_id",
	};

	try {
		var info = await Clickup.Comments.get_chat_view_comments("view_id", param);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
