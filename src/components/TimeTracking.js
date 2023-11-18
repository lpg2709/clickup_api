const Requests = require("../utils/requests");
const genParams = require("../utils/params");

var TimeTracking = function (token) {
	this.token = token;
}
/**
 *
 * @param {JSON} params
 */
TimeTracking.prototype.get_time_entries_within_date_range = function (params) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			let param = genParams(params, ["team_id"], ["team_id"]);
			var res = await Requests.https_clickupapi_get(`/api/v2/team/${params.team_id}/time_entries${param}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 *
 * @param {String} team_id
 * @param {String} timer_id
 */
TimeTracking.prototype.get_singular_time_entry = function (team_id, timer_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/team/${team_id}/time_entries/${timer_id}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 *
 * @param {String} team_id
 */
TimeTracking.prototype.get_running_time_entry = function (team_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/team/${team_id}/time_entries/current`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Create time entry
 * @param {String} team_id
 * @param {JSON} data
 */
TimeTracking.prototype.create_time_entry = function (team_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/team/${team_id}/time_entries`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Remove time entry
 * @param {String} team_id
 */
TimeTracking.prototype.remove_tags_from_time_entries = function (team_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_delete(`/api/v2/team/${team_id}/time_entries/tags`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Get all time entries
 * @param {String} team_id
 */
TimeTracking.prototype.get_all_tags_from_time_entries = function (team_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/team/${team_id}/time_entries/tags`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 *
 * @param {String} team_id
 * @param {JSON} data
 */
TimeTracking.prototype.add_tags_from_time_entries = function (team_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_post(`/api/v2/team/${team_id}/time_entries/tags`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 *
 * @param {String } team_id
 * @param {JSON} data
 */
TimeTracking.prototype.change_tag_names_from_time_entries = function (team_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_put(`/api/v2/team/${team_id}/time_entries/tags`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 *
 * @param {String} team_id
 * @param {String} timer_id
 * @param {JSON} data
 */
TimeTracking.prototype.start_time_entry = function (team_id, timer_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_put(`/api/v2/team/${team_id}/time_entries/start/${timer_id}`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Stop time entry
 * @param {String} team_id
 */
TimeTracking.prototype.stop_time_entry = function (team_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_put(`/v2/team/${team_id}/time_entries/stop`, {}, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Delete time entry
 * @param {String} team_id
 * @param {String} timer_id
 */
TimeTracking.prototype.delete_time_entry = function (team_id, timer_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_delete(`/api/v2/team/${team_id}/time_entries/${timer_id}`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Update time entry
 * @param {String} team_id
 * @param {String} timer_id
 * @param {JSON} data
 */
TimeTracking.prototype.update_time_entry = function (team_id, timer_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_put(`/api/v2/team/${team_id}/time_entries/${timer_id}`, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Get time entry history
 * @param {String} team_id
 * @param {String} timer_id
 */
TimeTracking.prototype.get_time_entry_history = function (team_id, timer_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Requests.https_clickupapi_get(`/api/v2/team/${team_id}/time_entries/${timer_id}/history`, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = TimeTracking;
