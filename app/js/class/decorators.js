 //npm install babel-plugin-transform-decorators-legacy --save-dev
	
/*{
  "presets": ["es2015"],
  "plugins":["transform-decorators-legacy"]
}
*/

{
	let readonly = function(target,name,descriptor){
		descriptor.writable = false;
		return descriptor
	}

	class Test{
		@readonly
		time(){
			return '2017-03-11'
		}
	}

	let test = new Test();

	/*test.time = function(){
		console.log('change time')
	}*/
	console.log(test.time())
	//index.js:8946 Uncaught TypeError: Cannot assign to read only property 'time' of object '#<Test>'
}


{
	let typename = function(target,name,descriptor){
		target.myname = 'hello'
	}

	@typename
	class Test{

	}

	console.log('类修饰符',Test.myname) //类修饰符 hello
	//第三方修饰器JS库 npm install core-decorators
}


