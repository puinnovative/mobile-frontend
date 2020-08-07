<template>
	<view >
		<view v-for="msg in chatMsg" :key="msg.index" style="margin: 10px 0; display: block;">
			<image v-if="msg.user == 'listener'" style="float: left; width: 60px; height: 60px; background-color: #eeeeee; border-radius: 50%;" :src="msg.avatar"></image>
			<text v-if="msg.user == 'listener'" style="color: gray; font-size: 16px; position: relative; left: 20px; top: 15px" class="text">{{msg.content}}</text>
			<text v-if="msg.user == 'me'" style="color: gray; font-size: 16px; position: relative; top: 10px; left: 140px;" class="text">{{msg.content}}</text>
			<image v-if="msg.user == 'me'" style="float: right; width: 60px; height: 60px; background-color: #eeeeee; border-radius: 50%;" :src="msg.avatar"></image>
		</view>
		<view style="background-color: #CCCCCC; width: 100vw; height: 60px; position: absolute; bottom: 0">
			<input class="uni-input" v-model:value="me.msg" style="display: inline-block; width:70%; margin: 18px; background-color: white; border-radius: 10px;"/>
			<button class="mini-btn" @tap="sendMsg" type="primary" size="mini" style="float: right; margin: 13px; position: absolute; bottom: 0">发送</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				me: {
					msg: ""
				},
				chatMsg: [
					{
						avatar: "../../static/imgs/guy.png",
						content: "hi",
						user: "listener"
					}			
				]
			}
		},
		methods: {
			switchTo() {
				   uni.navigateTo({
							url: '/pages/one2one/index',
					});
			},
			sendMsg() {
				let that = this;
				that.chatMsg.push(					{
						avatar: "../../static/imgs/my.png",
						content: that.me.msg,
						user: "me"
				})
				let url = `http://api.qingyunke.com/api.php?key=free&appid=0&msg={that.me.msg}`
				uni.request({
				    url: url, //仅为示例，并非真实接口地址。
				    success: (res) => {
				        let msg = res.data.content;
						that.chatMsg.push(					{
								avatar: "../../static/imgs/guy.png",
								content: msg,
								user: "listener"
						})
				    }
				});
			}
		}
	}
</script>

<style>
</style>
