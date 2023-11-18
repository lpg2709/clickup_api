const Requests = require("../utils/requests");
const genParams = require("../utils/params");

var Comments = function (token) {
	this.token = token;
}
/**
 * Comment on a task
 * @param {String} task_id Tesk ID that will receive comment
 * @param {JSON} data Body request for the comment
 */
Comments.prototype.create_task_comment = function (task_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/task/${task_id}/comment`, data, token);
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
Comments.prototype.create_view_comment = function (view_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/view/${view_id}/comment`, data, token);
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
Comments.prototype.create_list_comment = function (list_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/list/${list_id}/comment`, data, token);
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
			var res = await Requests.https_clickupapi_put(`/api/v2/comment/${comment_id}`, data, token);
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
			var res = await Requests.https_clickupapi_delete(`/api/v2/comment/${comment_id}`, token)
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
			var res = await Requests.https_clickupapi_get(`/api/v2/task/${task_id}/comment`, token);
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
			var res = await Requests.https_clickupapi_get(`/api/v2/view/${view_id}/comment`, token);
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
			var res = await Requests.https_clickupapi_get(`/api/v2/list/${list_id}/comment`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * View comments from a Chat view.
 * @param {String} view_id View ID of chat
 * @param {JSON} params Object with query parameters
 */
Comments.prototype.get_chat_view_comments = function (view_id, params) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			let param = genParams(params, ["view_id"], ["view_id"]);
			var res = await Requests.https_clickupapi_get(`/api/v2/view/${view_id}/comment${param}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Add a new comment to a Chat view.
 * @param {String} view_id View ID where new commend gona be created
 * @param {JSON} data Body request for the comment
 */
Comments.prototype.create_chat_view_comment = function (view_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/task/${view_id}/comment`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Comments;
