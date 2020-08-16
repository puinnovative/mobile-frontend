<template>
	<view >
		<view v-for="item in chatGuy" :key="item.id" style="margin: 10px 0;">
			<navigator v-if="item.lastMsg" :url="'/pages/chat/index?chatWith='+ item.name + '&id=' + item.id" @tap="goToChat(item.id)">
				<image class="img" :src="item.avatar"></image>
				<view class="left">
					<text class="text">{{item.name}}</text>
					<text class="text2">{{item.lastMsg}}</text>
				</view>
				<view class="right">
					<text class="text3">{{new Date(item.lastTime).toLocaleDateString()}}</text>
					<uni-badge v-if="item.unReadCount" :text="item.unReadCount" type="error" class="text4"></uni-badge>
				</view>
				
				<hr/>
			</navigator>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chatGuy: ""
			}
		},
		onShow() {
			let that = this
			uni.getStorage({
				key: "recentChat",
				success: function (res) {
				        that.chatGuy = res.data;
				}
			})
		},
		methods: {
			goToChat(i) {
				this.chatGuy[i-1].unReadCount = 0;
				uni.setStorageSync("recentChat", this.chatGuy)
				
			}
		}
	}
</script>

<style>
	.img {
		width: 50px; 
		height: 50px; 
		background-color: #eeeeee; 
		border-radius: 50%;
	}
	.left {
		display: inline-block;
		margin-left: 8px;
	}
	.right {
		display: inline-block;
		float: right;
	}
	.text {
		color: gray; 
		font-size: 16px; 
		font-weight: bold;
		display: block;
		margin-bottom: 8px;
	}
	.text2 {
		color: gray; 
		font-size: 12px; 
		display: block;
		margin-left: 3px;
		margin-bottom: 10px;
	}
	.text3 {
		color: gray; 
		font-size: 12px; 
		display: block;
		margin-right: 20px;
	}
	.text4 {
		float: right;
		margin-top: 18px;
		margin-right: 8px;
	}
</style>
