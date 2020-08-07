<template>
	<view style="margin: 10px 0;">
		<text style="display: block; text-align:center; font-size: 40px; margin: 20px 0;">welcome to the chatroom !</text>
		<input :value="name" @input="setUserInfo" placeholder="给自己取个名字" class="uni-input" style="color: #2C405A; font-size: 20px; margin-top: 10px; text-align:center;"/>
		<button class="mini-btn" type="warn" size="mini" style="margin: 20px auto; width: 90px; display: block;" @tap="switchTo">login In</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: ""
			}
		},
		methods: {
			switchTo() {
					uni.setStorage({
						key: 'user_name',
						data: this.name
					});
				   uni.switchTab({
							url: '/pages/chat/index',
					});
			},
			setUserInfo(e) {
				this.name = e.detail.value;
			}
		}
	}
</script>

<style>
</style>
