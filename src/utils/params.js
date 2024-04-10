/**
 * Gennerate the query string parameters
 * @param {(JSON | String)} params - A JSON with all the parameters for the request. (path and query)
 * @param {String[]} required - List of required elements to be present on 'params'
 * @param {String[]} path_params - Parameters to be placed on path, removed from query string.
 * @returns {String} The encoded query string
 */
module.exports = function (params, required, path_params) {
	var requiredCount = 0;

	required.forEach(function(elem){
		if (params[elem] === undefined) {
			console.error(`Error: ${elem} required, see ClickUp documentation`);
			requiredCount++;
		}
	});

	if (requiredCount !== 0){
		return;
	}

	var paramsName = Object.keys(params);
	var str = "";
	let first = true;

	for(let i in paramsName){
		if(first)
			str += "?"; first = false;
		if(!path_params.includes(paramsName[i]))
			str += paramsName[i]+"="+params[paramsName[i]]+"&";
	}
	str = str.slice(0,-1);
	str = encodeURI(str);

	return str;
}
