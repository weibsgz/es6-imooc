class Timer{
	countdown(end,update,handle){
		//取当前时间
		const now = new Date().getTime();
		const self = this;
		//如果开始时间大于结束时间 说明结束了 执行handle回调
		if(now-end){
			handle.call(self)
		}
		else{
			//剩余时间
			let last_time = end -now ;
			const px_d = 1000*60*60*24;
			const px_h = 1000*60*60
			const px_m = 1000*60;
			const px_s = 1000;
			//剩余多少天
			let d =Math.floor(last_time/px_d);
			//剩余多少小时
			let h = Math.floor((last_time - d*px_d)/px_h);
			//剩余分钟数
			let m = Math.floor((last_time - d*px_d - h*px_h)/px_m)
			//剩余秒数
			let s = Math.floor((last_time - d*px_d - h*px_h - m*px_m)/px_s)
			
			let r = [];
			if(d>0){
				r.push(`<em>${d}</em>天`)
			}
			//要先判断有没有天
			if(r.length || (h>0)){
				r.push(`<em>${h}</em>时`)
			}

			if(r.length || (m>0)){
				r.push(`<em>${m}</em>分`)
			}

			if(r.length || (s>0)){
				r.push(`<em>${s}</em>秒`)
			}

			self.last_time = r.join('');
			update.call(self,r.join(''));

			setTimeout(function(){
				self.countdown(end,update,handle)
			},1000)
		}
	}
}

export default Timer