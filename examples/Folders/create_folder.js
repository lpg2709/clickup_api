const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	var data = {
		"name": "New Folder Name"
	}

	try {
		var info = await Clickup.Folders.create_folder("space_id", data);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
