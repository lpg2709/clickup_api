const View = require("../models/Views")

var Views = function (token) {
	this.token = token;
}

Views.prototype.create_team_view = function (team_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await View.create_team_view(team_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Views.prototype.create_space_view = function (space_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await View.create_space_view(space_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Views.prototype.create_folder_view = function (folder_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await View.create_folder_view(folder_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Views.prototype.create_list_view = function (list_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await View.create_list_view(list_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Views.prototype.update_view = function (view_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await View.update_view(view_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Views.prototype.delete_view = function (view_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await View.delete_view(view_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}


Views.prototype.get_team_view = function (team_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await View.get_team_view(team_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Views.prototype.get_space_view = function (space_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await View.get_space_view(space_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Views.prototype.get_folder_view = function (folder_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await View.get_folder_view(folder_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Views.prototype.get_list_view = function (list_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await View.get_list_view(list_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Views.prototype.get_view = function (view_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await View.get_view(view_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Views.prototype.get_view_tasks = function (view_id, page) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await View.get_view_tasks(view_id, page, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports =  Views;
