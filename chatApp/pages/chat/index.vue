<template>
	<view >
		<view v-for="item in chatGuy" :key="item.id" style="margin: 10px 0;" @tap="switchTo">
			<image style="width: 60px; height: 60px; background-color: #eeeeee; border-radius: 50%;" :src="item.avatar"></image>
			<text style="position: relative; bottom: 40px; color: gray; font-size: 16px;" class="text">{{item.name}}</text>
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
						id: "1"
					}
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
