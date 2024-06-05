var Attachments = function (token, attachment) {
	this.token = token;
	this.Attachment = attachment;
};
/**
 * Upload a file in task Clickup
 * @param {String} task_id Task_id to add the file
 * @param {String} file_path The path of the file, use path module
 * @param {String} file_name Name of the file on Clickup
 * @param {String} file_content_type The MIME type of the file
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 */
Attachments.prototype.post_task_attachment = function (
	task_id,
	file_path,
	file_name,
	file_content_type
) {
	var token = this.token;
	var attachment = this.Attachment;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await attachment.post_task_attachment(
				task_id,
				file_path,
				file_name,
				file_content_type,
				token
			);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
};

module.exports = Attachments;
