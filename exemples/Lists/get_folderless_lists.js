const clickup_api = require("../../src/index");


(async function main() {
	const Clickup = new clickup_api("access_token");

	try {
		var info = await Clickup.Lists.get_folderless_lists("space_id", false);
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
