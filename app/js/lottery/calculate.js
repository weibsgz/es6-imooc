class Calculate{ 
	//计算注数 active 当前选中的号码 play_name当前玩法标识
	computeCount(active,play_name){
		//默认注数是0
		let count = 0;
		const exist = this.play_list.has(play_name);
		//指定长度为active ,所有元素填充0 的一个数组
		const arr = new Array(active).fill('0');
		if(exist && play_name.at(0) === 'r'){
			count = Calculate.combine(arr,play_name.split('')[1])
		}
		return count;
	}

	//计算奖金金额 当前选中的号码 play_name当前玩法标识
	//返回奖金范围
	computeBonus(active,play_name){
		const play = play_name.split('');
		const self = this;
		let arr = new Array(play[1]*1).fill(0);
		let min,max;
		if(play[0] === 'r'){
			let min_active = 5 - (11-active);
			if(min_active > 0){
				//业务代码
			}
		}
	}


	//静态方法 arr参与组合运算的数组  size 组合运算的基数
	static combine(arr,size){
		let allResult = [];
		(function f(arr,size,result){
			let arrLen = arr.length;
			if(size > arrLen){
				return 
			}
			if(size === arrLen){
				allResult.push([].concat(result,arr));
			}
			else{
				for(let i=0;i<arrLen;i++){
					let newResult = [].concat(result);
					newResult.push(arr[i]);
					if(size === 1){
						arrResult.push(newResult)
					}else{
						let newArr = [].concat(arr);
						newArr.splice(0,i+1);
						f(newArr,size-1,newResult);
					}
				}
			}
		})(arr,size,[])
	}
}

export default Calculate