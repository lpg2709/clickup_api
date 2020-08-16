const Guest = require("../models/Guests");

var Guests = function (token) {
	this.token = token;
}

Guests.prototype.invite_guest_to_workspace = function (team_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Guest.invite_guest_to_workspace(team_id, data, token)
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Guests.prototype.edit_guest_on_workspace = function (team_id, guest_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Guest.edit_guest_on_workspace(team_id, guest_id, data, token)
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Guests.prototype.remove_guest_from_workspace = function (team_id, guest_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Guest.remove_guest_from_workspace(team_id, guest_id, token)
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Guests.prototype.get_guest = function (team_id, guest_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Guest.get_guest(team_id, guest_id, token)
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Guests.prototype.add_guest_to_task = function (task_id, guest_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Guest.add_guest_to_task(task_id, guest_id, data, token)
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Guests.prototype.remove_guest_from_task = function (task_id, guest_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Guest.remove_guest_from_task(task_id, guest_id, token)
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Guests.prototype.add_guest_to_list = function (list_id, guest_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Guest.add_guest_to_list(list_id, guest_id, data, token)
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Guests.prototype.remove_guest_from_list = function (list_id, guest_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Guest.remove_guest_from_list(list_id, guest_id, token)
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Guests.prototype.add_guest_to_folder = function (folder_id, guest_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Guest.add_guest_to_folder(folder_id, guest_id, data, token)
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Guests.prototype.remove_guest_from_folder = function (folder_id, guest_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Guest.remove_guest_from_folder(folder_id, guest_id, token)
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Guests;
