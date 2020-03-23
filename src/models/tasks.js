var https = require("https")

module.exports = {
	create_taks: function(list_id, data, token){
		data = JSON.stringify(data);

		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/list/${list_id}/task`,
			method: "POST",
			headers: {
				"Authorization": token,
				"Content-Type": "application/json"
			}
		}
		return new Promise(function(resolve, reject){
			const req = https.request(option, function(res){
				var str = '';
				if(res.statusCode != 200){
					reject(res.statusCode);
				}

				res.on('data', function(chunk){
					str += chunk;
				});

				res.on('end', function(){
					resolve(JSON.parse(str));
				});

				res.on('error', function(err){
					reject(err);
				});
			});

			req.on('error', function(err){
				reject(err);
			});
			req.write(data);
			req.end();
		});
	},

	update_task: function(task_id, data, token){
		data = JSON.stringify(data);

		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/task/${task_id}`,
			method: "PUT",
			headers: {
				"Authorization": token,
				"Content-Type": "application/json"
			}
		}
		return new Promise(function(resolve, reject){
			const req = https.request(option, function(res){
				var str = '';
				if(res.statusCode != 200){
					reject(res.statusCode);
				}

				res.on('data', function(chunk){
					str += chunk;
				});

				res.on('end', function(){
					resolve(JSON.parse(str));
				});

				res.on('error', function(err){
					reject(err);
				});
			});

			req.on('error', function(err){
				reject(err);
			});
			req.write(data);
			req.end();
		});
	},
	delete_task: function(task_id, token){

		const option = {
			host: 'api.clickup.com',
			port: 443,
			path: `/api/v2/task/${task_id}`,
			method: "DELETE",
			headers: {
				"Authorization": token,
				"Content-Type": "application/json"
			}
		}
		return new Promise(function(resolve, reject){
			const req = https.request(option, function(res){
				var str = '';
				if(res.statusCode != 200){
					reject(res.statusCode);
				}

				res.on('data', function(chunk){
					str += chunk;
				});

				res.on('end', function(){
					resolve(JSON.parse(str));
				});

				res.on('error', function(err){
					reject(err);
				});
			});

			req.on('error', function(err){
				reject(err);
			});
			req.write("");
			req.end();
		});
	}

}
