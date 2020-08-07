<template>
	<view class="container">
			<view v-for="item in chatGuy" :key="item.id" style="margin: 10px 0;">
				<image style="width: 60px; height: 60px; background-color: #eeeeee; border-radius: 50%;" :src="item.avatar"></image>
				<text style="position: relative; bottom: 40px; color: gray; font-size: 16px;" class="text">{{item.name}}</text>
				<button @tap="switchTo" class="mini-btn" type="warn" size="mini" style="float: right; margin: 20px 0; width: 90px" :disabled="item.offline">{{item.status ? "开始聊天" : "不在线"}}</button>
				<image style="width: 100%; height: 12px; display: block;" src="../../static/imgs/line.png"></image>
			</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				chatGuy: [
					{
						name: "张三",
						avatar: "../../static/imgs/guy.png",
						id: "1",
						offline: false,
						status: 1
					},
					{
						name: "李四",
						avatar: "../../static/imgs/guy2.png",
						id: "2",
						offline: true,
						status: 0
					},
					{
						name: "王五",
						avatar: "../../static/imgs/guy3.png",
						id: "3",
						offline: true,
						status: 0
					},
				]
			}
		},
		methods: {
			switchTo() {
				   uni.navigateTo({
							url: '/pages/one2one/index',
					});
			}
		}
	}
</script>

<style>
</style>
