const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	try {
		var info = await Clickup.Folders.delete_folder("folder_id");
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
