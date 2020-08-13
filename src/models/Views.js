var https = require("https")

module.exports = {
	create_team_view: function (team_id, data, token) {
		data = JSON.stringify(data);

		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/team/${team_id}/view`,
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
	create_space_view: function (space_id, data, token) {
		data = JSON.stringify(data);

		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/space/${space_id}/view`,
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

	create_folder_view: function (folder_id, data, token) {
		data = JSON.stringify(data);

		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/folder/${folder_id}/view`,
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

	create_list_view: function (list_id, data, token) {
		data = JSON.stringify(data);

		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/list/${list_id}/view`,
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
	update_view: function (view_id, data, token) {
		data = JSON.stringify(data);

		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/view/${view_id}`,
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
	delete_view: function (view_id, token) {

		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/view/${view_id}`,
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
	get_team_view: function (team_id, token) {
		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/team/${team_id}/view`,
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

	get_space_view: function (space_id, token) {
		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/space/${space_id}/view`,
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
	get_folder_view: function (folder_id, token) {
		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/folder/${folder_id}/view`,
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
	get_list_view: function (list_id, token) {
		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/list/${list_id}/view`,
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
	get_view: function (view_id, token) {
		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/view/${view_id}`,
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
	get_view_tasks: function (view_id, page, token) {
		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/view/${view_id}/task?page=${page}`,
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
	}
}
