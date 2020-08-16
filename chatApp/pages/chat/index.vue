<template>
	<view>
		<scroll-view scroll-y="true" v-for="msg in chatMsg" :key="msg.index">
				<view v-if="msg.user == 'listener'" class="chatU">
					<image class="imgL" :src="msg.avatar"></image>
					<text class="text">{{new Date(msg.time).toLocaleDateString()}}</text>
					<text class="text">{{msg.content}}</text>
				</view>
				<view v-if="msg.user == 'me'" class="chatU">
					<image class="imgR" :src="msg.avatar"></image>
					<text class="text2">{{new Date(msg.time).toLocaleDateString()}}</text>
					<br>
					<text class="text2">{{msg.content}}</text>		
				</view>
		</scroll-view>
		<button type="default" style="height: 80px; display: block; margin-top: 100px; visibility: hidden;">click</button>
		<view class="bottom" >
			<input class="uni-input" v-model:value="me.msg" style="display: inline-block; width:70%; margin: 18px; background-color: white; border-radius: 10px;"/>
			<button class="mini-btn" @tap="sendMsg" type="primary" size="mini" style="float: right; margin: 13px; position: absolute; bottom: 0">发送</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				round: 1,
				id: "",
				me: {
					msg: ""
				},
				recentChat: "",
				chatMsg: []
			}
		},
			
		onUnload() {
			let newChat = this.recentChat.map((data) => {
							if(data.id == this.id) {
								data.chatMsg = this.chatMsg;
								this.chatMsg[0] ? (data.lastMsg = this.chatMsg[this.chatMsg.length-1].content) : ""
								return data
							} else {
								return data
							}
						});
			uni.setStorageSync("recentChat", newChat)
		},
		onLoad(options) {
			let option = options;
			let that = this;
			uni.setNavigationBarTitle({
			            title: option.chatWith
			});
			uni.getStorage({
				key: "recentChat",
				success: function(res) {
					let target = res.data.filter((data, i) => {
						return data.id == option.id
					});
					if( target[0]) {
						that.chatMsg = target[0].chatMsg;
					} else {
						res.data.push(
							{
								name: options.chatWith,
								avatar: "../../static/imgs/guy.png",
								id: options.id,
								lastMsg: "",
								lastTime: 1350052653000,
								unReadCount: 0,
								chatMsg: []
							}
						);
					}
					that.recentChat = res.data
					
				}
			})
			that.id = options.id;
		},	
		beforeUpdate() {
			let that = this;
			uni.pageScrollTo({
			            duration:0,
			            scrollTop: 200 * (that.round)
			})
		},
		methods: {
			sendMsg() {
				this.round = this.round + 1;
				let that = this;
				that.chatMsg.push(					{
						avatar: "../../static/imgs/my.png",
						content: that.me.msg,
						user: "me",
						time: 1350052653000
				})
				let url = 'http://api.qingyunke.com/api.php?key=free&appid=0&msg=' + that.me.msg;
				uni.request({
				    url: url, 
				    success: (res) => {
				        let msg = res.data.content;
						that.chatMsg.push(					{
								avatar: "../../static/imgs/guy.png",
								content: msg,
								user: "listener",
								time: 1350052653000
						})
				    }
				});
			}
		}
	}
</script>

<style>
	.container {
		overflow-x: hidden;
	}
	.chatU {
		margin: 20px 0;
	}
	.imgL {
		float: left; 
		width: 60px; 
		height: 60px; 
		background-color: #eeeeee; 
		border-radius: 50%;
	}
	.imgR {
		float: right; 
		width: 60px; 
		height: 60px; 
		background-color: #eeeeee; 
		border-radius: 50%;
	}
	.text {
		color: gray; 
		font-size: 16px; 
		position: relative; 
		left: 20px; 
		top: 5px;
		display: block;
	}
	.text2 {
		color: gray; 
		font-size: 16px; 
		position: relative; 
		left: 265px; 
	}
	.bottom {
		background-color: #CCCCCC; 
		width: 100vw; 
		height: 60px; 
		position: fixed;
		bottom: 0; 
	}
</style>
