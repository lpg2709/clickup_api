const TimeTracking_ = require("../models/TimeTracking")

var TimeTracking = function (token) {
	this.token = token;
}

TimeTracking.prototype.get_time_entries_within_date_range = function (params) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await TimeTracking_.get_time_entries_within_date_range(params, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

TimeTracking.prototype.get_singular_time_entry = function (team_id, timer_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await TimeTracking_.get_singular_time_entry(team_id, timer_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

TimeTracking.prototype.get_running_time_entry = function (team_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await TimeTracking_.get_running_time_entry(team_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

TimeTracking.prototype.create_time_entry = function (team_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await TimeTracking_.create_time_entry(team_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

TimeTracking.prototype.remove_tags_from_time_entries = function (team_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await TimeTracking_.remove_tags_from_time_entries(team_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

TimeTracking.prototype.get_all_tags_from_time_entries = function (team_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await TimeTracking_.get_all_tags_from_time_entries(team_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

TimeTracking.prototype.add_tags_from_time_entries = function (team_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await TimeTracking_.add_tags_from_time_entries(team_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

TimeTracking.prototype.change_tag_names_from_time_entries = function (team_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await TimeTracking_.change_tag_names_from_time_entries(team_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

TimeTracking.prototype.start_time_entry = function (team_id, timer_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await TimeTracking_.start_time_entry(team_id, timer_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

TimeTracking.prototype.stop_time_entry = function (team_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await TimeTracking_.stop_time_entry(team_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

TimeTracking.prototype.delete_time_entry = function (team_id, timer_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await TimeTracking_.delete_time_entry(team_id, timer_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

TimeTracking.prototype.update_time_entry = function (team_id, timer_id, data) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await TimeTracking_.update_time_entry(team_id, timer_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = TimeTracking;
