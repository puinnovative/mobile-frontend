<script>
export default {
	onLaunch: function() {
		uni.getStorage({
			key: 'userInfo',
			success: function (res) {
			        res.data.user_name ? uni.switchTab({url: '/pages/recent/index',}) : "";
			}
		});
		
		uni.getStorage({
			key: "recentChat",
			success: function(res) {
				res.data[0] ? "" : (
							uni.setStorageSync("recentChat", [
													{
														name: "张三",
														avatar: "../../static/imgs/guy.png",
														id: "1",
														lastMsg: "你好，我是张三",
														lastTime: 1350052653000,
														unReadCount: 1,
														chatMsg: [
															{
																avatar: "../../static/imgs/guy.png",
																content: "你好,我是张三",
																user: "listener",
																time: 1350052653000
															}	
														]
													},
													{
														name: "杨修",
														avatar: "../../static/imgs/guy.png",
														id: "2",
														lastMsg: "你好，我是杨修",
														lastTime: 1350052653000,
														unReadCount: 1,
														chatMsg: [
															{
																avatar: "../../static/imgs/guy.png",
																content: "你好，我是杨修",
																user: "listener",
																time: 1350052653000
															}	
														]
													},
													{
														name: "王五",
														avatar: "../../static/imgs/guy.png",
														id: "3",
														lastMsg: "你好，我是王五",
														lastTime: 1350052653000,
														unReadCount: 1,
														chatMsg: [
															{
																avatar: "../../static/imgs/guy.png",
																content: "你好，我是王五",
																user: "listener",
																time: 1350052653000
															}	
														]
													}
							])
				)
			}
		})
		
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
</style>
