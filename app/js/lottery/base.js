import $ from 'jquery';
class Base{
	//初始化奖金和玩法说明
	initPlayList(){
		this.play_list.set('r2',{
			bonus:6,
			tip:"123123",
			name:"任二"
		})
		.set('r3',{
			bonus:19,
		})

	}
}