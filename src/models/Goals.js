var https = require("https")

module.exports = {
	create_goal: function (team_id, data, token) {
		data = JSON.stringify(data);
		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/team/${team_id}/goal`,
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

	update_goal: function (goal_id, data, token) {
		data = JSON.stringify(data);
		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/goal/${goal_id}`,
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

	delete_goal: function (goal_id, token) {
		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/goal/${goal_id}`,
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
	},

	get_goals: function (team_id, token) {
		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/team/${team_id}/goal`,
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

	get_goal: function (goal_id, token) {
		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/goal/${goal_id}`,
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
	create_key_result: function (goal_id, data, token) {
		data = JSON.stringify(data);
		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/goal/${goal_id}/key_result`,
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

	edit_key_result: function (key_result_id, data, token) {
		data = JSON.stringify(data);
		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/key_result/${key_result_id}`,
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

	delete_key_result: function (key_result_id, token) {
		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/key_result/${key_result_id}`,
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
