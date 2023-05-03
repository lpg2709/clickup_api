const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");
	var data = {
		"description": "from api",
		"tags": [
			{
				"name": "name of tag",
				"tag_bg": "#BF55EC",
				"tag_fg": "#BF55EC"
			}
		],
		"start": 1595282645000,
		"billable": true,
		"duration": 50000,
		"assignee": 1
	};

	try {
		var info = await Clickup.TimeTracking.create_time_entry("team_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
