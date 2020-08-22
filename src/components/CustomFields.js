const CustomField = require("../models/CustomFields");

var CustomFields = function (token) {
	this.token = token;
}
/**
 * Set the custom field value
 * @param {String} task_id Task ID that contemplates the custom field
 * @param {String} field_id Field ID to be set the value
 * @param {JSON} data Body request for the field
 */
CustomFields.prototype.set_custom_field_value = function (task_id, field_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await CustomField.set_custom_field_value(task_id, field_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Remove a value from a custom field
 * @param {String} task_id Task ID that contemplates the custom field
 * @param {String} field_id Field ID to be removed
 */
CustomFields.prototype.remove_custom_field_value = function (task_id, field_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await CustomField.remove_custom_field_value(task_id, field_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Consult all custom field from a list
 * @param {String} list_id List ID to be consulted
 */
CustomFields.prototype.get_accessible_custom_fields = function (list_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await CustomField.get_accessible_custom_fields(list_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = CustomFields;
