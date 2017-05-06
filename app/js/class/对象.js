{
	//简洁表示法
	let o = 1;
	let k = 2;
	let es5 = {
		o:o,
		k:k
	}
	let es6 = {
		o,
		k
	}

	console.log(es5)
	console.log(es6)  //两个结果一样
}

{
	//简洁写法之 方法
	let es5_method = {
		hello:function(){
			console.log('hello')
		}
	}

	let es6_method = {
		hello(){
			console.log('hello')
		}
	}

	console.log(es5_method.hello(),es6_method.hello())
}


{
	//属性表达式，ES6中KEY值不一定写死

	let a = 'b';
	let es5_obj = {
		a:'c'
	}

	let es6_obj = {
		[a]:'c'
	}

	console.log(es5_obj,es6_obj) // {'b':'c'}
}

//新增API 比较是否相等
{

	console.log('字符串',Object.is('abc','abc')) //true
	console.log('数组',Object.is([],[])) //false 数组是引用类型
	console.log('数组',[]===[]) //false
}

//拷贝 第一个参数是要拷贝的对象 第二个参数是把哪个值拷贝到对象上
{
	console.log('拷贝',Object.assign({a:'a'},{b:'b'})) //{a: "a", b: "b"}
}

//同数组里边的entries
{
	let test = {k:123,o:456};
	for(let [key,value] of Object.entries(test)){
		console.log(key)  // k o
		console.log(value) // 123 456
	}
}

