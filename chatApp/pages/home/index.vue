<template>
	<view style="margin: 10px 0; overflow: hidden;">
		<image class="img" src="../../static/imgs/my.png"></image>
		<input @input="setUserInfo" :value="name" />
		<button @tap="resetUserInfo" class="mini-btn" type="warn" size="mini" style="margin: 20px auto; width: 90px; display: block;">更新资料</button>
		<button @tap="signOut" class="mini-btn" type="warn" size="mini" style="margin: 20px auto; width: 90px; display: block;">Sign out</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: ""
			}
		},
		onLoad() {
			this.getUserInfo()
		},
		methods: {
			getUserInfo() {
				let that = this
				uni.getStorage({
				    key: 'userInfo',
				    success: function (res) {
				        that.name = res.data.user_name
				    }
				});
			},
			resetUserInfo() {
				uni.setStorage({
					key: 'user_name',
					data: this.name
				});
				uni.showToast({
				    title: '修改成功',
				    duration: 2000
				});
			},
			setUserInfo(e) {
				this.name = e.detail.value;
			},
			signOut() {
					uni.removeStorage({
						key: "userInfo",
						success: function() {
							uni.reLaunch({
								url: '/pages/login/index',
							});
						}
					})

			}
		}
	}
</script>

<style>
	.img {
		width: 100px; 
		height: 100px; 
		background-color: #eeeeee; 
		border-radius: 50%; 
		margin: 0 40%
	}
	input {
		color: #2C405A; 
		font-size: 20px; 
		margin-top: 10px; 
		text-align:center;
	}
</style>
