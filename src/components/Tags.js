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



module.exports = Tags;
