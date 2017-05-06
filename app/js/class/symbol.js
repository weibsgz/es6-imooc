{
	//声明 的2个symbol 永远不会相等
	let a1 = Symbol();
	let a2 = Symbol();
	console.log(a1 === a2)  //false

	//如果两个KEY值相等
	//
	let a3 = Symbol.for('a3'); //'a3'是key值
	let a4 = Symbol.for('a3');

	console.log(a3 === a4) //true
}


{
	let a1 = Symbol.for('abc');
	let obj = {
		[a1]:'123',
		'abc':345,
		'c':456
	}
	console.log(obj)

	
}