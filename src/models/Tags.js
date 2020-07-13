var https = require("https")
var genParams = require('../utils/params');

module.exports = {
	get_sapce_tags: function (space_id, token) {
		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/space/${space_id}/tag`,
			method: "GET",
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
			req.write("");
			req.end();
		});
	},

	create_space_tag: function (space_id, data, token){
		data = JSON.stringify(data);
		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/space/${space_id}/tag`,
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
	},

	edit_space_tag: function (space_id, tag_name, data, token) {
		data = JSON.stringify(data);
		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/space/${space_id}/tag/${encodeURI(tag_name)}`,
			method: "PUT",
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
	},

	delete_space_tag: function (space_id, tag_name, token) {

		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/space/${space_id}/tag/${encodeURI(tag_name)}`,
			method: "DELETE",
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
			req.write("");
			req.end();
		});
	}
}
