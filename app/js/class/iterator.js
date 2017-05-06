{
	let arr = ['hello','world'];
	let map = arr[Symbol.iterator]();
	console.log(map.next())
	console.log(map.next())
	console.log(map.next()) 
	//{value: "hello", done: false}
	//{value: "world", done: false}
	//{value: undefined, done: true}
}

{
	let obj = {
		start:[1,3,2],
		end:[7,9,8],
		//自定义iterator 先遍历start 再遍历end
		[Symbol.iterator](){
			let self = this;
			let index = 0;
			let arr = self.start.concat(self.end);
			let len = arr.length;
			return {
				next(){
					if(index<len){
						return {
							value:arr[index++],
							done:false
						}
					}
					else{
						return {
							value:arr[index++],
							done:true
						}
					}
				}
			}
		}
	}
	for(let key of obj){
		console.log(key)  //1 2 3 7 9 8
	}
	


}

{
	let arr = ['hello','world'];
	for(let value of arr){
		console.log(value)  // hello world
	}
}