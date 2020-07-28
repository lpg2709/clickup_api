const Comment = require("../models/Comments");

var Comments = function (token) {
	this.token = token;
}

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
