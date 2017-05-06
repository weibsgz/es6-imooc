//循环
{
	let s = "abcdefg";
	//es5
	for(let i=0; i<s.length; i++){
		//console.log("es5: " + s[i])
	}

	//es6
	for(let c of s){
		console.log("es6: "+c)
	}
}
/*
	字符串中是否包含某字符
	判断是否以某字符开始，结束
*/
{
	let str = "string";
	console.log("是否包含"+str.includes("r")) //true
	console.log("是否以某字符为起始"+str.startsWith("str")) //true
	console.log("是否以某字符为起始"+str.endsWith("ng")) //true
}

//字符串重复
{
	let str = "abc";
	console.log(str.repeat(2)) // abcabc
}

/*字符串模板，用数字1左边的按钮打印包裹*/
{
	let name = "list";
	let info = "hello world";
	let m = `i am ${name},${info}`;
	console.log(m) //i am list,hello world
}

//es7中的语法 需要安装babel-polyfill 并在页面中引入才可以
{
	//补足字符串，常用日历中，比如选中3月 要变成 03
	console.log('1'.padStart(2,'0'))  //01
	console.log('1'.padEnd(2,'0'))   //10
}
