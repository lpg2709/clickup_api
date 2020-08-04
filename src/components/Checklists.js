const Checklist = require("../models/Checklists")

var Checklists = function (token) {
	this.token = token;
}

Checklists.prototype.create_checklist = function (task_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Checklist.create_checklist(task_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Checklists.prototype.edit_checklist = function (checklist_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Checklist.edit_checklist(checklist_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Checklists.prototype.delete_checklist = function (checklist_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Checklist.delete_checklist(checklist_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Checklists.prototype.create_checklist_item = function (checklist_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Checklist.create_checklist_item(checklist_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Checklists.prototype.edit_checklist_item = function (checklist_id, checklist_item_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Checklist.edit_checklist_item(checklist_id, checklist_item_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Checklists.prototype.delete_checklist_item = function (checklist_id, checklist_item_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Checklist.delete_checklist_item(checklist_id, checklist_item_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Checklists;
