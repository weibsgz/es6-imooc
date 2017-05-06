import $ from 'jquery';

class Interface{
	//获取遗漏数据
	getOmit(issue){
		let self = this;
		return new Promise((resolve,reject) => {
			$.ajax({
				url:'/get/omit',
				data:{
					issue:issue
				},
				dataType:'json',
				success:function(res){
					//其他类的方法 setOmit
					self.setOmit(res.data);
					resolve.call(self,res)
				},
				error:function(err){
					reject.call(err)
				}
			})
		});
	}
	//获取开奖号码 issue期号
	getOpenCode(issue){
		let self = this;
		return new Promise((resolve,reject) => {
			$.ajax({
				url:'/get/opencode',
				data:{
					issue:issue
				},
				dataType:'json',
				success:function(res){
					//其他类的方法 
					self.setOpenCode(res.data);
					resolve.call(self,res)
				},
				error:function(err){
					reject.call(err)
				}
			})
		})
	}
	//获取当前状态 issue期号
	getState(issue){
		let self = this;
		return new Promise((resolve,reject) => {
			$.ajax({
				url:'/get/state',
				data:{
					issue:issue
				},
				dataType:'json',
				success:function(res){
					resolve.call(self,res)
				},
				error:function(err){
					reject.call(err)
				}
			})
		})
	}
}

export default Interface


