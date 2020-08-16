<template>
	<view>
		<uni-indexed-list :options="list" @click="goToChat"></uni-indexed-list>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				list: [
							{
								"letter": "C",
								"data": ["曹操", "曹冲", "曹丕", "曹植"]
							}, 
							{
								"letter": "D",
								"data": ["段誉", "断手", "断指", "短腿"]
							},
							{
								"letter": "G",
								"data": ["高人", "高数", "高参", "高级"]
							},
							{
								"letter": "W",
								"data": ["王石", "王林", "王毅", "王五"]
							},
							{
								"letter": "X",
								"data": ["吸热", "袭人", "洗洗", "洗吧"]
							},{
								"letter": "Y",
								"data": ["杨修", "杨科", "杨坤", "央财"]
							},
							{
								"letter": "Z",
								"data": ["账户", "张科", "掌机", "张三"]
							}
						]
			}
		},
		methods: {
			
			goToChat(e) {
				uni.getStorage({
					key: "recentChat",
					success: function(res) {
						uni.navigateTo({
								url: '/pages/chat/index?chatWith=' + e.item.name + '&id=' + (res.data.length + 1),
						});
					}
				})

			}
		}
	}
</script>

<style>
</style>
