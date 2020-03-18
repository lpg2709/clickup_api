const Task = require('./models/tasks')
var Clickup = function(token){
	this.token = token;
}

Clickup.prototype.cretae_task = function(list_id, data){
	token = this.token
	return new Promise(async function(resolve, reject){
		try{
			var res = await Task.create_taks(list_id, data, token);
			resolve(res);
		}catch(err){
			reject(err);
		}
	});
}

module.exports = Clickup;
