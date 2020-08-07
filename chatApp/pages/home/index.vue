<template>
	<view style="margin: 10px 0;">
		<image style="width: 100px; height: 100px; background-color: #eeeeee; border-radius: 50%; margin: 0 40%" src="../../static/imgs/my.png"></image>
		<input class="uni-input" @input="setUserInfo" :value="name" style="color: #2C405A; font-size: 20px; margin-top: 10px; text-align:center;"/>
		<button @tap="reSetUserInf" class="mini-btn" type="warn" size="mini" style="margin: 20px auto; width: 90px; display: block;">更新资料</button>
		<button @tap="switchTo" class="mini-btn" type="warn" size="mini" style="margin: 20px auto; width: 90px; display: block;">Sign out</button>
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
				    key: 'user_name',
				    success: function (res) {
				        that.name = res.data
				    }
				});
			},
			reSetUserInf() {
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
			switchTo() {
				   uni.reLaunch({
							url: '/pages/login/index',
					});
			}
		}
	}
</script>

<style>
</style>
