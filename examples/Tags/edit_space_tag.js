const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"tag": {
			"name": "Updated Tag",
			"tag_fg": "#ffffff",
			"tag_bg": "#ffffff"
		}
	}

	try {
		var info = await Clickup.Tags.edit_space_tag("space_id", "tag_name", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
