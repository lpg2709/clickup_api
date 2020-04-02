 module.exports = function (params, required) {
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

		for(let i in paramsName){
			str += paramsName[i]+"="+params[paramsName[i]]+"&";
		}
		str = str.slice(0,-1);
		str = encodeURI(str);

		return str;
}
