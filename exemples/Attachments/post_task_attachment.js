const clickup_api = require("../../src/index");
const path = require("path");
const fs = require("fs");


(async function main() {
	const Clickup = new clickup_api("access_token");

	try {
		var info = await Clickup.Attachments.post_task_attachment("task_id", path.join(__dirname, "./file_upload.txt"), "ClickupLogo.txt", "text/plain");
		console.log(info);
	} catch (err) {
		console.log(err)
	}
})()
