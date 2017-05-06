{
	//原始数据
	let obj = {
		time:'2017-3-11',
		name:'net',
		_r:123
	};

	//代理对象
	let monitor = new Proxy(obj,{
		//拦截对象属性的读取
		get:function(target,key){
			return target[key].replace('2017','2018')
			
		},
		//拦截对象设置属性 target 指的是原OBJ对象
		//key 是属性键
		//value 是属性值
		set:function(target,key,value) {
			//只允许修改name
			if(key === 'name'){
				return target[key] = value
			}
			else{
				return target[key]
			}
		},

		//拦截key in obj操作
		has(target,key){
			//只暴露name属性
			if(key === 'name'){
				return target[key]
			}
			else{
				return false
			}
		},

		//拦截删除
		deleteProperty(target,key){
			//只能删除以下划线开头的属性
			if(key.indexOf('_')>-1){
				delete target[key];
				return true
			}
			else{
				return target[key]
			}
		},
		//拦截object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
		ownKeys(target){
			return Object.keys(target).filter(item => item!='time')
		}
	});
	console.log(monitor.time) //2018-3-11

	monitor.time = '2011-3-12'
	console.log(monitor.time) //2018-3-11

	console.log('has','name' in monitor,'time' in monitor)  //true false

	delete monitor.time;
	console.log('delete',monitor) //{time: "2017-3-11", name: "net", _r: 123} 并没有删除掉time

	delete monitor._r;
	console.log('delete',monitor) //{time: "2017-3-11", name: "net"}

}
//Reflect
{	
	//原始数据
	let obj = {
		time:'2017-3-11',
		name:'net',
		_r:123
	};

	console.log(Reflect.get(obj,'time'))  //读取属性
	Reflect.set(obj,'name','mukewang')
	console.log(obj) //{time: "2017-3-11", name: "mukewang", _r: 123}
	console.log('has',Reflect.has(obj,'name')) // true 判断是否有某属性

}

//实列
{
	function validator(target,validator){
		return new Proxy(target,{
			_validator:validator,
			set(target,key,value,proxy){
				if(target.hasOwnProperty(key)){
					let va = this._validator
					if(!!va(value)){
						return Reflect.set(target,key,value,proxy)
					}
					else{
						throw Error(`不能设置${key}到${value}`)
					}
				}
				else{
					throw Error (`${key} 不存在`)
				}
			}
		})
	}

	const personValidators = {
		name(val){
			return typeof val === 'string'
		},
		age(val){
			return typeof val === 'number' && val > 18
		}
	}

	class Person{
		constructor(name,age){
			this.name = name;
			this.age = age;
			return validator(this,personValidators)
		}
	}

	const person = new Person('lilei',30)
	console.log(person)

	person.name = 48;

}