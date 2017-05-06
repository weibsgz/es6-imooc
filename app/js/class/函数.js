{
	function test(x,y = 'world'){
		console.log('默认值',x,y)
	}
	test('hello') //hello world
	test('hello','kill') //hello kill
}

{
	var x = 'test';
	function test(x,y=x){
		console.log('作用域',x,y) 
	}

	test('kill') //kill kill 不是取上边的X
	test() //undefind undefind 本身没有传
}
//rest参数 将参数的多余项放入一个数组中
//和扩展运算符相反 ... 是将一个数组转为用逗号分隔的参数序列
{
	function test(...arg){
		console.log(arg)
		for(let v of arg){
			console.log(v)
		}
	}

	test(1,2,3,4,'a') //1,2,3,4,a
}

//扩展运算符
{
	console.log(...[1,2,4]) //1 2 4
}

//箭头函数 arrow函数名  v 函数参数  箭头后边的是函数返回值,如果没参数就写空括号
{
	let arrow = v => v*2;
	let arrow2 = () => 5
/*	function arrow(v)
	{
		return v*2;
	}*/

	console.log(arrow(3)) //6

	console.log(arrow2()) //5

}

//尾调用 提升性能
{
	function tail(x){
		console.log(x)
	}
	function fx(x) {
		return tail(x)
	}

	fx(123) //123
}

