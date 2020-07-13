const Tag = require("../models/Tags");

var Tags = function(token){
	this.token = token;
}

Tags.prototype.get_space_tag = function(space_id){
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Tag.get_sapce_tags(space_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Tags.prototype.create_space_tag = function (space_id, data){
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Tag.create_space_tag(space_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Tags.prototype.edit_space_tag = function (space_id, tag_name, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Tag.edit_space_tag(space_id, tag_name, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Tags.prototype.delete_space_tag = function (space_id, tag_name) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Tag.delete_space_tag(space_id, tag_name, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Tags.prototype.add_tag_to_task = function (task_id, tag_name) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Tag.add_tag_to_task(task_id, tag_name, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

Tags.prototype.remove_tag_from_task = function (task_id, tag_name) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Tag.remove_tag_from_task(task_id, tag_name, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Tags;
