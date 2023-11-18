module.exports = function (params, required, path_params) {
	var requiredCount = 0;

	required.forEach(function(elem){
		if (params[elem] === undefined) {
			console.log(`Error: ${elem} required, see ClickUp documentation`);
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
