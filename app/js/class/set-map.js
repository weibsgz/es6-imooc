//ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

//做存储优先考虑 MAP 如果要求唯一性 考虑SET 
{
	let list = new Set();
	list.add(5);
	list.add(7);

	console.log('size',list.size); //2 有几个,类似于数组的length
}

{
	let arr = [1,2,3,4,5];
	let list = new Set(arr);
	console.log('size',list.size) //5
}

//Set类型中的值必须是唯一的，可用于数组去重

{
	let list = new Set();
	list.add(1);
	list.add(2);
	list.add(1);

	console.log(list)  //只有1,2

	let arr = [1,2,3,1,2];
	let list1 = new Set(arr);

	console.log(list1) //1,2,3
}

{
	let arr = ['add','delete','clear','has'];
	let list = new Set(arr)
	//判断set有没有某元素
	console.log('has',list.has('add')) //true

	//删除一个元素
	console.log('delete',list.delete('add'),list)  //{"delete", "clear", "has"}
	//清空set
	list.clear();
	console.log(list) //空
}

//Set的遍历

{
	let arr = ['add','delete','clear','has'];
	let list = new Set(arr)
	
	for(let key of list.keys()){
		console.log(key) // add,delete,clear,has
	}

	for(let value of list.values()){
		console.log(value) // add,delete,clear,has
	}

	for(let value of list){
		console.log(value) // add,delete,clear,has
	}

	for(let [key,value] of list.entries()){
		console.log(key,value) // add add delete delete clear clear has has
	}

	//和数组遍历一样
	list.forEach(function(item){
		console.log(item) // add,delete,clear,has
	})


}


//weekset 的元素只能是对象,没有clear方法，没有size属性，不能被遍历
{
	let weakList = new WeakSet();

	let arg = {};
	weakList.add(arg);
	//weakList.add(2)  报错
	console.log(weakList) // {}
}

//map元素有key ,value  key可以是数组
//Map类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
{
	let map = new Map();
	let arr = ['123'];
	map.set(arr,456)      //添加元素

	console.log('map',map)  //{["123"] => 456}

	console.log(map.get(arr)) //456  只取值
}

{
	let map  = new Map([['a',123],['b',456]])
	map.set('c',444)
	console.log(map) // {"a" => 123, "b" => 456, "c" => 444}
	//元素个数
	console.log(map.size)  //3
	//获取某个值
	console.log(map.get('a'))  //123
	//删除一个元素
	console.log(map.delete('a'),map) //{"b" => 456, "c" => 444}
	map.clear()
	console.log(map)
}

//接收key值必须是对象 没有clear方法，没有size属性，不能被遍历
{
	let weekmap = new WeakMap();
	let o = {};
	weekmap.set(o,123)

	console.log(weekmap.get(o)) //123
}

//map 和 数组 对象的对比
{
	//增删改查对比
	let map = new Map();
	let array = [];

	//增
	map.set('t',1);
	array.push({t:1})

	console.info('map-array',map,array) //

	//查
	let map_exist = map.has('t');
	let array_exist = array.find(item => item.t);

	console.info('map-array',map_exist,array_exist) //true   t:1

	//改
	map.set('t',2);
	array.forEach(item => item.t?item.t=2:'');
	console.info('map-array',map,array) 

	//删
	map.delete('t');
	let index = array.findIndex(item => item.t);
	array.splice(index,1);
}


//set 和数组的对比
{
	let set = new Set();
	let array = [];
	let item = {t:1}
	//增
	set.add(item);
	array.push({t:1});

	//查	
	console.log(set.has(item)); //如果直接 set.has({t:1})false 以为是引用地址
	let array_exist = array.find(item => item.t);

	//改
	set.forEach(item => item.t?item.t:"");
	array.forEach(item => item.t?item.t:"");

	//删
	set.forEach(item => item.t?set.delete(item):"")
	let index = array.findIndex(item => item.t);
	array.splice(index,1);
}


//map set 与Object 对比
{
	let item = {t:1};
	let map = new Map();
	let set = new Set();
	let obj = {};

	//增
	map.set('t',1);
	set.add(item);
	obj['t'] = 1;

	//查
	console.info({
		map_exist:map.has('t'), //true
		set_exist:set.has(item), //true
		obj_exist:'t' in obj   //true
	})

	//改
	map.set('t',2)  //map
	item.t = 2; //set 只改引用
	obj['t'] = 2 

	//删
	map.delete('t');
	set.delete(item);
	delete obj['t']
}