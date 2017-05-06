//解构赋值

{
	let a,b,c,rest;
	[a,b,c]=[1,2];
	console.log(a,b,c); //输出 1,2,undefined 相当于let a=1,b=2
}

{	
	let a,b,rest;
	[a,b,...rest]=[1,2,3,4,5,6];
	console.log(a,b,rest) //1 2 [3, 4, 5, 6]
}

{
	let a,b;
	({a,b}={a:1,b:2})
	console.log(a,b)  //1 2
}


//使用场景：
//变量交换，以前要用中间变量
{
	let a = 1;
	let b =2;
	[a,b] = [b,a]
	console.log(a,b)
}

{
	function f(){
		return [1,2]
	}
	let a,b;
	[a,b] = f();
	console.log(a,b)//1,2
}
//忽略某些返回值
{
	function f(){
		return [1,2,3,4,5]
	}
	let a,b,c;
	[a,,,b,c]=f();
	console.log(a,b,c) //1,4
}
//不确定返回数组长度，只关心第一个，后面合并成一个数组
{
	function f(){
		return [1,2,3,4,5]
	}
	let a,b,c;
	[a,...b]=f();
	console.log(a,b) //1,[2,3,4,5]]
}


//对象解构赋值
{
	let o = {p:42,q:true};
	let {p,q} = o;
	console.log(p,q) //42,ture
}

{
	let {a=10,b=5}={a:3};
	console.log(a,b) //3,5
}
//模拟JSON对象
{
	let metaData = {
		title:'abc',
		test:[{
			title:'test',
			desc:'descrition'
		}]
	}

	let {title:esTitle,test:[{title:cnTitle}]} = metaData;
	console.log(esTitle,cnTitle) //abc test
}