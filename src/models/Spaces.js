var https = require("https")

module.exports = {
	create_space: function (team_id, data, token) {
		data = JSON.stringify(data);
		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/team/${team_id}/space`,
			method: "POST",
			headers: {
				"Authorization": token,
				"Content-Type": "application/json"
			}
		}
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
			req.write(data);
			req.end();
		});
	}

}
