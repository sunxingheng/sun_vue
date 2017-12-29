<template>
	<div class="home">
		<div class="home_item">
			<index></index>
		</div>
		<div class="home_list">
			<div v-for="(item,index) in list" :class="{select:item.status}" >
				<img v-show='item.status' :src='item.img_ch'/>
				<img v-show='!item.status' :src='item.img_no'/>
				<p>{{item.word}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import index from '../components/index/index'
	export default{
		data(){
			return{
				list:[{
					word:'首页',
					img_ch:'http://icon.image.yaocaimaimai.com/index_selected.png',
					img_no:'http://icon.image.yaocaimaimai.com/index.png',
					status:true,
				},{
					word:'个人',
					img_ch:'http://icon.image.yaocaimaimai.com/mine_selected.png',
					img_no:'http://icon.image.yaocaimaimai.com/index.png',
					status:false,
				}]
			}
		},
		components:{
			index
		},
		mounted(){
			
		}
	}
</script>

<style lang="less">
	.home{
		height: 100vh;
		width: 100vw;
		position: relative;
		.home_item{
			height: 100vh;
			padding-bottom: 110px;
			overflow: auto;
		}
		.home_list{
			width: 100%;
			background-color: #f3f3f3;
			height: 110px;
			display: flex;
			position: absolute;
			bottom: 0;
			div{
				flex: 1;
				padding: 14px 0;
				font-size: 12px;
				&.select{
					background-color: #eaeaea;
					color: #F77615;
				}
				img{
					height: 50px;
				}
			}
		}
	}
</style>