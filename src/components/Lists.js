const List = require("../models/Lists");

var Lists = function (token) {
	this.token = token;
}

Lists.prototype.create_list = function (folder_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await List.create_list(folder_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Lists.prototype.create_folderless_list = function (space_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await List.create_folderless_list(space_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Lists.prototype.update_list = function (list_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await List.update_list(list_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Lists.prototype.delete_list = function (list_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await List.delete_list(list_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Lists.prototype.get_lists = function (folder_id, archived) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await List.get_lists(folder_id, archived, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Lists.prototype.get_folderless_lists = function (space_id, archived) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await List.get_folderless_lists(space_id, archived, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Lists.prototype.get_list = function (list_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await List.get_list(list_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Lists;
