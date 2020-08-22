const Tag = require("../models/Tags");

var Tags = function(token){
	this.token = token;
}
/**
 * Get all tags in space
 * @param {String} space_id Space ID
 */
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
/**
 * Create a tag
 * @param {String} space_id Space ID where be created
 * @param {JSON} data Body request for tag
 */
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
/**
 * Edit a tag in space
 * @param {String} space_id Space ID where the tag is
 * @param {String} tag_name Tag to be updated
 * @param {JSPON} data Body request for tag
 */
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
/**
 * Delete a tag from space
 * @param {String} space_id Space ID where the tag is
 * @param {JSON} tag_name Tag to be deleted
 */
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
/**
 * Add a tag into a task
 * @param {String} task_id Task ID where tag be created
 * @param {String} tag_name Name of the tag
 */
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
/**
 * Remove a tag from task
 * @param {String} task_id Task where the tag is
 * @param {String} tag_name Tag to be removed
 */
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
