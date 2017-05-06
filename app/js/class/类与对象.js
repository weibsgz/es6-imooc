//基本定义和生成实例
{
	class Parent{
		constructor(name='mukewang'){
			this.name = name;
		}
	}

	let v_parent = new Parent('v');
	console.log('构造函数和实列',v_parent) //Parent {name: "v"}
}

//继承
{
	class Parent{
		constructor(name='mukewang'){
			this.name = name;
		}
	}

	class Child extends Parent{

	}

	console.log('继承',new Child()) //Child {name: "mukewang"}
}	

//继承传递参数
{
	class Parent{
		constructor(name='mukewang'){
			this.name = name;
		}
	}

	class Child extends Parent{
		constructor(name = 'child'){
			//super 调用父类的constructor
			super(name);
			//子类自己的
			this.type = 'child'

		}
	}

	console.log('继承传递参数',new Child()) //Child {name: "child", type: "child"}
	console.log('继承传递参数',new Child('hello')) //Child {name: "hello", type: "child"}
}	

//getter setter
{
	class Parent{
		//constructor 不是必写的 只有要声明一些属性的时候才写
		constructor(name='mukewang'){
			this.name = name;
		}
		//这个是属性 不是方法
		get longName(){
			return 'mk'+this.name
		}
		set longName(value){
			this.name = value;
		}
	}
	
	let v = new Parent();
	console.log('getter',v.longName) //getter mkmukewang
	
	v.longName = 'hello';
	console.log('getter',v.longName) //getter mkhello

}

//类的静态方法
{
	class Parent{
		constructor(name='mukewang'){
			this.name = name;
		}
		
		static tell(){
			console.log('tell')
		}
	}
	//静态方法通过类调用不是通过类的实列调用
	Parent.tell()   //tell
}

//静态属性
{
	class Parent{
		constructor(name='mukewang'){
			this.name = name;
		}
		
		static tell(){
			console.log('tell')
		}
	}
	//静态属性没有关键词直接在类上定义
	Parent.type = 'test'
	console.log(Parent.type) 

}

{
	class Test{
		doThis(){
			let self = this;  //Test
			console.log('self',self)
			setTimeout(function(){
				console.log(this)  //window
			},2000)
		}
	}

	var a = new Test;
	a.doThis()
}