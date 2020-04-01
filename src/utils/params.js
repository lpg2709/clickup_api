module.exports = function (params) {
		if(!params.list_id){
			console.log("Error: list_id required");
			return
		}
		if (params.archived != true && params.archived != false){
			console.log("Error: archived required");
			return
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


// (async function a(){
// 	try{
// 		await main({
// 			list_id: "Teste",
// 			archived: false,
// 			page: "12",
// 			order_by: "12",
// 			reverse: "12",
// 			subtasks: "12",
// 			space_ids: "12",
// 			project_ids: "12",
// 			statuses: "12",
// 			include_closed: "12",
// 			assignees: "12",
// 			due_date_gt: "12",
// 			due_date_lt: "12",
// 			date_created_gt: "12",
// 			date_created_lt: "12",
// 			date_updated_gt: "12",
// 			date_updated_lt: "12"
// 		});
// 	}catch(err){
// 		console.log(err);
// 	}
// })()
