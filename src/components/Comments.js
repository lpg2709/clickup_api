const Comment = require("../models/Comments");

var Comments = function (token) {
	this.token = token;
}
/**
 * Comment on a task
 * @param {String} task_id Tesk ID that will receive comment
 * @param {JSON} data Body request for the comment
 */
Comments.prototype.post_task_comment = function (task_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Comment.post_task_comment(task_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Comment on a view
 * @param {String} view_id View ID that will receive commet
 * @param {JSON} data Body request for the comment
 */
Comments.prototype.post_view_comment = function (view_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Comment.post_view_comment(view_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Comment on a list
 * @param {String} list_id List id that will receive comment
 * @param {JSON} data Body request for the comment
 */
Comments.prototype.post_list_comment = function (list_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Comment.post_list_comment(list_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Update a comment
 * @param {String} comment_id Comment ID of the comment to be updated
 * @param {JSON} data Body request for the update
 */
Comments.prototype.update_comment = function (comment_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Comment.update_comment(comment_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Delete a comment
 * @param {String} comment_id Comment ID to be deleted
 */
Comments.prototype.delete_comment = function (comment_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Comment.delete_comment(comment_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * See all comment on a task
 * @param {String} task_id Task ID of the task to be consult
 */
Comments.prototype.get_task_comment = function (task_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Comment.get_task_comment(task_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * See all comment on a view
 * @param {String} view_id View ID of the task to be consult
 */
Comments.prototype.get_view_comment = function (view_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Comment.get_view_comment(view_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * See all comment on a List
 * @param {String} list_id View ID of the task to be consult
 */
Comments.prototype.get_list_comment = function (list_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Comment.get_list_comment(list_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Comments;
