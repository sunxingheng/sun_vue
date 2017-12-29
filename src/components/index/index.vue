<template>
	<div class="index"  ref="wrapper">
		<div class="searchBar" id="searchBar">
			<ul>
				<li>区域<i class="iconfont icon-jiantouxia"></i></li>
				<li>合<i class="iconfont icon-jiantouxia"></i></li>
				<li>整<i class="iconfont icon-jiantouxia"></i></li>
				<li>免<i class="iconfont icon-jiantouxia"></i></li>
			</ul>
			<div>
				位置
			</div>
			<div>
				筛选条件
			</div>
		</div>
		<div>
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop:'',
			}
		},

		methods: {
			
		},
		
		mounted() {
			
		}
	}
</script>

<style lang="less">
	.index {
		min-height: 100%;
		position: relative;
		background-color: #f00;
		.searchBar {
			position:absolute;
			width: 100%;
			top:0;
			.isFixed {
				background-color: #fff;
				top: 0;
				z-index: 999;
			}
			ul {
				background-color: #fff;
				width: 100%;
				height: 100px;
				line-height: 100px;
				display: flex;
				li {
					font-size: 26px;
					text-align: center;
					width: 20%;
					i {
						font-size: 20px;
						padding-left: 5px;
						color: #ccc;
					}
				}
				border-bottom: 1px solid #ddd;
			}
		}
	}
</style>