//Array.of方法用于将一组值，转换为数组。
{
	let arr = Array.of(3,4,7,9,11);
	console.log(arr) //[3, 4, 7, 9, 11]

	let empty = Array.of()
	console.log(empty)  //[]
}
//from,将一些集合转换为数组 
{
	let p  = document.querySelectorAll('p');
	let pArr = Array.from(p);
	pArr.forEach(function(v){
		//textContent是获取元素文本节点的方法，原生方法
		console.log(v.textContent)
	})
	//可以传入2个参数，第二个参数可以做一些类似map的功能
	console.log(Array.from([1,3,5],function(item){
		return item+2;
	}))
}

//填充数组 fill(7,1,3) 第一个参数是要填充的数 第二参数是起始位置，第三个参数结束位置
{
	console.log([1,'a',undefined].fill(7)) //[7,7,7]
	console.log(['a','b','c'].fill(7,1,3)) //["a",7,7] 
}

{
	//返回数组下标
	for(let index of ['1','c','ks'].keys()){
		console.log(index)  //0,1,2
	}
	//需要es7兼容
	/*for(let value of ['1','c','ks'].values()){
		console.log(value)
	}
	*/

	//取得索引和值
	for(let [index,value] of ['1','c','ks'].entries()){
		console.log(index,value) //0"1"   1"c"   2 "ks"
	}
}

//查找元素是否在数组中
{	
	console.log([1,2,3,4,5,6].find(function(item){
		return item > 3  //4 find只找到第一个满足条件返回
	}))

	console.log([1,2,3,4,5,6].findIndex(function(item){
		return item > 3  //3 findIndex 返回下标
	})) 
}

//数组中是否包含 这里 NaN === NaN
{
	console.log([1,2,NaN].includes(1)) //true
	console.log([1,2,NaN].includes(NaN)) //true
}