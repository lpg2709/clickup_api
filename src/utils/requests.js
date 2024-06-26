const https = require("https");

var Requests = function (param) {
	this.host = param.host;
	this.port = param.port;
	this.pathPrefix = param.pathPrefix;
};

Requests.prototype.https_clickupapi_get = function (path, token) {
	const option = {
		host: this.host,
		port: this.port,
		path: this.pathPrefix + path,
		method: "GET",
		headers: {
			Authorization: token,
			"Content-Type": "application/json",
		},
	};
	return new Promise(function (resolve, reject) {
		const req = https.request(option, function (res) {
			var str = "";
			if (res.statusCode != 200) {
				reject(res.statusCode);
			}

			res.on("data", function (chunk) {
				str += chunk;
			});

			res.on("end", function () {
				resolve(JSON.parse(str));
			});

			res.on("error", function (err) {
				reject(err);
			});
		});

		req.on("error", function (err) {
			reject(err);
		});

		req.end();
	});
};

Requests.prototype.https_clickupapi_post = function (path, data, token) {
	data = JSON.stringify(data);
	const option = {
		host: this.host,
		port: this.port,
		path: this.pathPrefix + path,
		method: "POST",
		headers: {
			Authorization: token,
			"Content-Type": "application/json",
		},
	};
	return new Promise(function (resolve, reject) {
		const req = https.request(option, function (res) {
			var str = "";
			if (res.statusCode != 200) {
				reject(res.statusCode);
			}

			res.on("data", function (chunk) {
				str += chunk;
			});

			res.on("end", function () {
				resolve(JSON.parse(str));
			});

			res.on("error", function (err) {
				reject(err);
			});
		});

		req.on("error", function (err) {
			reject(err);
		});
		req.write(data);
		req.end();
	});
};

Requests.prototype.https_clickupapi_put = function (path, data, token) {
	data = JSON.stringify(data);
	const option = {
		host: this.host,
		port: this.port,
		path: this.pathPrefix + path,
		method: "PUT",
		headers: {
			Authorization: token,
			"Content-Type": "application/json",
		},
	};
	return new Promise(function (resolve, reject) {
		const req = https.request(option, function (res) {
			var str = "";
			if (res.statusCode != 200) {
				reject(res.statusCode);
			}

			res.on("data", function (chunk) {
				str += chunk;
			});

			res.on("end", function () {
				resolve(JSON.parse(str));
			});

			res.on("error", function (err) {
				reject(err);
			});
		});

		req.on("error", function (err) {
			reject(err);
		});
		req.write(data);
		req.end();
	});
};

Requests.prototype.https_clickupapi_delete = function (path, token) {
	const option = {
		host: this.host,
		port: this.port,
		path: this.pathPrefix + path,
		method: "DELETE",
		headers: {
			Authorization: token,
			"Content-Type": "application/json",
		},
	};
	return new Promise(function (resolve, reject) {
		const req = https.request(option, function (res) {
			var str = "";
			if (res.statusCode != 204) {
				reject(res.statusCode);
			}
			// 204 should not return any data, but if it does, we'll parse it
			res.on("data", function (chunk) {
				str += chunk;
			});

			res.on("end", function () {
				let parsedJSON = null;
				try {
					parsedJSON = JSON.parse(str);
				} catch (e) {
					// ignore the error for now
				}

				resolve(parsedJSON);
			});

			res.on("error", function (err) {
				reject(err);
			});
		});

		req.on("error", function (err) {
			reject(err);
		});
		req.end();
	});
};

module.exports = Requests;
