
//ES5 用settimeout模拟 与后端通讯
{
	let ajax = function(callback){
		setTimeout(function(){
			callback&&callback()
		},1000)
	};

	ajax(function(){
		console.log('timeout1') 
	})
}

//ES6
{
	let ajax = function(){
		console.log('执行');
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve()
			},1000)
		})
	}

	//上边返回一个promise实例 这个实例有then方法
	ajax().then(function(){
		console.log('Promise','timeout2')
	},function(){
		//reject
	})
}

//执行顺序
{
	let ajax = function(){
		console.log('执行2');
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve()
			},1000)
		})
	};

	ajax()
	.then(function(){
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve()
			},1000)
		})
	}).then(function(){
		console.log('timeout3')
	})
}

//捕获错误

{
	let ajax = function(num){
		console.log('执行4');
		return new Promise(function(resolve,reject){
			if(num >5){
				resolve()
			}
			else
			{
				throw new Error('不能小于5')
			}
		})
	}

	ajax(6).then(function(){
		console.log('log',6)   //正常执行
	}).catch(function(err){
		console.log('catch',err)
	})

	ajax(3).then(function(){  
		console.log('log',3)
	}).catch(function(err){
		console.log('catch',err)   //报错
	})
}

//所有图片都加载完成再加载页面
{
	function loadImg(src){
		return new Promise((resolve,reject) => {
			let img = document.createElement('img')
			img.src = src;
			img.onload = function(){
				resolve(img);
			}
			img.onerror = function(err){
				reject(err);
			}
		})
	}

	function showImgs(imgs){
		imgs.forEach(function(img){
			document.body.appendChild(img);
		})
	}
	//把多个promise实例合并成一个，必须所有实列都触发了，才会继续执行then方法
	Promise.all([
		loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    	loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
    	loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')
	]).then(showImgs)
}


//有一个图加载完就添加到页面 race
{
	function loadImg(src){
		return new Promise((resolve,reject) => {
			let img = document.createElement('img')
			img.src = src;
			img.onload = function(){
				resolve(img);
			}
			img.onerror = function(err){
				reject(err);
			}
		})
	}

	function showImgs(img){
		let p = document.createElement('p');
		p.appendChild(img);
		document.body.appendChild(p);
	}

	Promise.race([
		loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    	loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
    	loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')
	]).then(showImgs)

}


//执行顺序
{
	let ajax = function(){
		console.log('执行');
		return new Promise(function(resolve,reject){
			var data = 123;
			setTimeout(function(){
				resolve(data)
			},1000)
		})
	};

	ajax()
	.then(function(data){
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				console.log(data)
				resolve(data)
			},1000)
		})
	}).then(function(data){
		console.log(data)
	})
}
