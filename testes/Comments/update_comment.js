const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"comment_text": "Updated comment text",
    	// "assignee": 183,
		"resolved": true
	}

	try {
		var info = await Clickup.Comments.update_comment("comment_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
