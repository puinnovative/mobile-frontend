<template>
	<view class="container">
		<text class="slogan">Link  the world~</text>
		<input v-model="userInfo.user_name" placeholder="请输入诨号"/>
		
		<button class="mini-btn" @tap="switchTo">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {
					user_name: ""
				}

			}
		},
		methods: {
			switchTo() {
					uni.setStorage({
						key: 'userInfo',
						data: this.userInfo
					});
				   uni.switchTab({
							url: '/pages/recent/index',
					});
			},
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	.container {
		background-image: url(../../static/imgs/bgc.jpg);
		height: 100vh;
		overflow: hidden;
	}
	.slogan {
		display: block; 
		text-align:center; 
		font-size: 46px; 
		margin: 20px 70px 80px 70px;
		color: #007AFF;
	}
	input {
		display: block;
		color: #2C405A; 
		font-size: 20px; 
		margin: 0 auto;
		text-align: start;
		margin-top: 20px; 
		background-color: white;
		border: 1px solid #C0C0C0;
		height: 40px;
		width: 250px;
	}
	button {
		margin: 20px auto; 
		width: 90px; 
		display: block;
	}
</style>
