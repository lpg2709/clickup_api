const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"tag": {
			"name": "Tag Name",
			"tag_fg": "#000000",
			"tag_bg": "#000000"
		}
	}

	try {
		var info = await Clickup.Tags.create_space_tag("space_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
