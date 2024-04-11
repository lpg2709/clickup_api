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
	expect(param).toBeUndefined();
});

test("Int type on query string", () => {
	var param = genParams({"int": 123}, ["int"], []);
	expect(param).toBe("?int=123");
});

test("Float type on query string", () => {
	var param = genParams({"float": 3.1415}, ["float"], []);
	expect(param).toBe("?float=3.1415");
});

test("Boolean type on query string", () => {
	var param = genParams({"bool": true}, ["bool"], []);
	expect(param).toBe("?bool=true");
});

test("Boolean type on query string", () => {
	var param = genParams({"bool": true}, ["bool"], []);
	expect(param).toBe("?bool=true");
});

test("String type on query string", () => {
	var param = genParams({"str": "Gollum"}, ["str"], []);
	expect(param).toBe("?str=Gollum");
});

test("String with space type on query string", () => {
	var param = genParams({"str": "My precious"}, ["str"], []);
	expect(param).toBe("?str=My%20precious");
});

test("Array of numbers", () => {
	var param = genParams({"arr": [1, 2, 3]}, ["arr"], []);
	expect(param).toBe("?arr[]=1&arr[]=2&arr[]=3");
});

test("Array of strings - no space", () => {
	var param = genParams({"arr": ["one", "two", "three"]}, ["arr"], []);
	expect(param).toBe("?arr[]=one&arr[]=two&arr[]=three");
});

test("Array of strings - space", () => {
	var param = genParams({"arr": ["to do", "blocked by", "this is a text"]}, ["arr"], []);
	expect(param).toBe("?arr[]=to%20do&arr[]=blocked%20by&arr[]=this%20is%20a%20text");
});

