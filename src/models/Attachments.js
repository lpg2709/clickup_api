var https = require("https");
var crypto = require("crypto");
const fs = require("fs");

module.exports = {
	post_task_attachment: function (task_id, file_path, file_name, file_content_type, token) {
		var boundary = "---WebKitFormBoundary" + crypto.randomBytes(7).toString('hex');

		var option = {
			'method': 'POST',
			'hostname': 'api.clickup.com',
			'path': `/api/v2/task/${task_id}/attachment`,
			'port': 443,
			'headers': {
				'Authorization': token,
				'content-type': `multipart/form-data; boundary=--${boundary}`
			}
		};
		return new Promise(function (resolve, reject) {
			const req = https.request(option, function (res) {
				var str = '';
				if (res.statusCode != 200) {
					reject(res.statusCode);
				}

				res.on('data', function (chunk) {
					str += chunk;
				});

				res.on('end', function () {
					resolve(JSON.parse(str));
				});

				res.on('error', function (err) {
					reject(err);
				});
			});

			req.on('error', function (err) {
				reject(err);
			});

			var postData = `----${boundary}\r\nContent-Disposition: form-data; name=\"attachment\"; filename=\"${file_path}\"\r\nContent-Type: \"${file_content_type}\"\r\n\r\n${fs.readFileSync(file_path)}\r\n----${boundary}\r\nContent-Disposition: form-data; name=\"filename\"\r\n\r\n${file_name}\r\n----${boundary}--`;

			req.write(postData);

			req.end();
		});
	}
}
