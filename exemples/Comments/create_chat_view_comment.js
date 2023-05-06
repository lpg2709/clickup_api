const clickup_api = require("../../src/index");

(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"comment_text": "List comment content",
		"notify_all": true
	}

	try {
		var info = await Clickup.Comments.create_chat_view_comment("view_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
