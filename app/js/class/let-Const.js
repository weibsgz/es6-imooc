function test(){
	//外层的console无法打印出来 因为let 只在块作用域内生效，换成var可以打印出3
	//会报一个引用错误，因为ES6强制开启严格模式
	for(let i =0 ; i<3 ; i++)
	{
		console.log(i)
	}	
	//console.log(i)

	/*//不可以重复声明
	let a = 1;
	let a = 2;*/

}	

function last(){
	const PI = 3.14;
	//对象是引用类型 ，返回k是引用的指针,可以变化
	const k = {
		a:1
	}
	k.a = 2;
	k.b = 3;
	console.log(PI,k);
}




test();
last();