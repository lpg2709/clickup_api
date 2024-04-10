const genParams = require("../src/utils/params");

test("One required on path", () => {
	var param = genParams({"team_Id": "123"}, ["team_Id"], ["team_Id"]);
	expect(param).toBe("");
});

test("One required on path, one int in query string", () => {
	var param = genParams({"team_Id": "123", "page": 0}, ["team_Id"], ["team_Id"]);
	expect(param).toBe("?page=0");
});

test("Required not informed", () => {
	var param = genParams({"page": 0}, ["team_Id"], ["team_Id"]);
	expect(param).toBe(undefined);
});
