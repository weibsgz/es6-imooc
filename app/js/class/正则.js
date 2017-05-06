{
	//es5 中两种字符串正则
	let regex = new RegExp('xyz','i');
	let regex2 = new RegExp(/xyz/i);
	console.log(regex.test('xyz123'),regex2.test('xyz123'))  //true , true

	let regex3 = new RegExp(/xyz/ig,'i')
	console.log(regex3.flags)  //i    flags获取正则对象修饰符的属性,es6中声明的第二个修饰符会覆盖第一个
}

// g,y 都是全局匹配，第二次匹配都是从上次匹配的位置开始继续寻找
// g 是继续寻找到对应的 ， y是必须从第一次匹配结束的位置寻找  本例中找到 下划线了 返回undefind
{
	let s = 'bbb_bb_b';
	let a1 = /b+/g;
	let a2 = /b+/y;

	console.log('one',a1.exec(s),a2.exec(s)) // bbb,bbb
	console.log('two',a1.exec(s),a2.exec(s)) //bb,undefind
	//es6中判断是否开启了粘连模式(y)
	console.log(a1.sticky,a2.sticky) //false ,true
}

