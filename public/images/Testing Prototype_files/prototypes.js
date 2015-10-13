console.log("Hello");

function A(name) {
	this.name = name;
	}

A.prototype.test = function(){
	console.log('A')
}

// function B(name) {
// 	A.call(this)
// }

// B.prototype.test = function(){
// 	console.log('B')
// }

var aObj = new A("Suzie");

// var bObj = new B("Suzie");

console.log("test");