const Clickup = require("../src/index");
const fs = require("fs");

(function main() {
	const c = new Clickup("jfkdlsafkjdsl");
	var out = "";

	var memb = Object.keys(c);
	for( let i in memb ) {
		var m = Object.getPrototypeOf(c[memb[i]]);
		if(memb[i] != "token") {
			var mm = Object.keys(m)
			for (let j in mm) {
				out += memb[i] + "." + mm[j] + "\n";
			}
		}
	}

	fs.writeFileSync("./all-members.txt", out, "utf8");

})();
