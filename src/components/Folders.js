const Folder = require("../models/Folders");

var Folders = function (token) {
	this.token = token;
}
/**
 * Create a folder.
 * @param {String} space_id Space ID where the folder how be created
 * @param {JSON} data Body request for the folder.
 */
Folders.prototype.create_folder = function (space_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Folder.create_folder(space_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Update a folder.
 * @param {String} folder_id Folder to be updated
 * @param {String} data Body request for the update
 */
Folders.prototype.update_folder = function (folder_id, data) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Folder.update_folder(folder_id, data, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Delete a folder.
 * @param {String} folder_id Folder to be deleted
 */
Folders.prototype.delete_folder = function (folder_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Folder.delete_folder(folder_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Get all folder in space.
 * @param {String} space_id Space to search.
 * @param {Boolean} archived Search in archived folder
 */
Folders.prototype.get_folders = function (space_id, archived) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Folder.get_folders(space_id, archived, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}
/**
 * Get a folder
 * @param {String} folder_id Folder ID.
 */
Folders.prototype.get_folder = function (folder_id) {
	var token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Folder.get_folder(folder_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = Folders;
