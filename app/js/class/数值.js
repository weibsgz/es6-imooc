
{
	console.log('NaN',Number.isNaN(NaN)) //true
	console.log('NaN',Number.isNaN(0)) //false
}
//判断是不是整数
{
	console.log('25',Number.isInteger(25)) //true
	console.log('25.0',Number.isInteger(25.0)) //true
	console.log('25.1',Number.isInteger(25.1)) //false
	console.log('str',Number.isInteger("25")) //false
}	

//返回整数部分
{
	console.log(4.1,Math.trunc(4.1))  //4
	console.log(4.1,Math.trunc(4.1))  //4
}

//判断一个数是正数，负数，还是0

{
	console.log('-5',Math.sign(-5))  //-1
	console.log('0',Math.sign(0))  //0
	console.log('5',Math.sign(5))  //1
	console.log('sd',Math.sign("sd"))  //NaN
	console.log('字符串50',Math.sign("50"))  //1 先转换为数字
} 
//立方根
{
	console.log('-1',Math.cbrt(-1))  //-1
	console.log('8',Math.cbrt(8))  //2
}