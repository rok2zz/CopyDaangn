<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="$style.articleImageContainer">
				<button class="background-color-black-white-basic">
					<img :src="require('@/assets/chvron_left.svg')">
				</button>
				<div :class="$style.articleInfoImage">
					<!-- <img :src="require(callInfoImage(imageIndex))"> -->
				</div>
				<button class="background-color-black-white-basic">
					<img :src="require('@/assets/chvron_right.svg')">
				</button>
			</div>
			<div :class="$style.userInfoContainer">

			</div>
			<div :class="$style.articleInfoContainer">

			</div>
			<div :class="$style.hotArticlesContainer">
				<div :class="[$style.hotArticlesContents, 'border-top-color']">
					<div :class="$style.hotArticlesTitle">
						<span :class="$style.hotArticlesTitleSpan">당근마켓 인기중고</span>
						<span :class="$style.hotArticlesLinkSpan">
							<router-link class="general-font-color-carrot" to="/hot_articles">더 구경하기</router-link>
						</span>
					</div>
					<div :class="$style.hotArticlesList">
						<div :class="$style.hotArticles" v-for="(item, index) in duplicatedProducts.slice(0, 6)" :key="index">
							<router-link class="general-font-color-black-2529" :to="{name: 'articles', query: {id : item.id}}">
								<img :src="item.images[0]">
								<span :class="$style.articleTitle" v-if="item.name.length >= 15">{{ cuttingName(item.name) }}</span>
								<span :class="$style.articleTitle" v-else>{{ item.name }}</span>
								<span :class="$style.articlePrice">{{ priceType(item.price) }}원</span>
								<span :class="$style.articleLocation">{{ item.registered_by.location }}</span>
								<span class="general-font-color-gray-8e96">관심 {{ item.likes }}∙채팅 {{ item.chats }}</span>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" module>
.index {
	
	> .container {

		> .articleImageContainer {
			width: 730px;
			
			display: flex;
			align-items: center;

			margin: 0 auto;

			> button {
				border: none;

				cursor: pointer;
			}

			> .articleInfoImage {

				> img {
					border-radius: 10px;
				}
			}
		}

		> .userInfoContainer {
			width: 677px;

			display: flex;

			padding: 25px 0px;
		}


		> .hotArticlesContainer {
			> .hotArticlesContents {
				width: 677px;

				margin: 0 auto;
				padding-top: 32px;

				border-top: 1px solid;

				> .hotArticlesTitle {
					width: 100%;

					text-align: left;

					padding-bottom: 32px;

					> span {
						display: inline-block;
					}

					> .hotArticlesTitleSpan {
						width: 50%;

						font-size: 18px;
						font-weight: bold;
					}

					> .hotArticlesLinkSpan {
						width: 50%;
						text-align: right;

						> a {
							font-size: 15px;

							text-decoration: none;
						}

						> a:hover {
							font-weight: bold;
						}
					}
				}

				> .hotArticlesList {
					width: 100%;

					display: flex;
					flex-wrap: wrap;

					> .hotArticles {
						width: 33%;
						
						display: flex;

						margin-bottom: 56px;

						> a {
							display: block;
							
							> img {
								width: 208px;
								height: 208px;

								margin-bottom: 10px;

								border-radius: 10px;
							}

							
							> span {
								width: 100%;

								display: inline-block;
								
								font-size: 13px;

								padding-bottom: 4px;
							}

							> .articleTitle {
								font-size: 16px;
							}

							> .articlePrice {
								font-size: 15px;
								font-weight: bold;
							}
						}
					}
				}
			}
		}
	}
}

</style>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import ContentsJsonFile from '@/assets/contents.json'

@Component({
	components: {
		// HelloWorld,
	},
})
export default class Articles extends Vue {
	products: any = ContentsJsonFile.products
	duplicatedProducts: any = []
	selectedProduct: any = []
	articleID: any = this.$route.query.id
	articleImageIndex: number = 1
	imageIndex: number = 0

	mounted() {
		this.duplicateProducts()
		this.selectProduct()
	}

	duplicateProducts() {
		this.duplicatedProducts = this.products.filter((el: { id: any; }) => {
			return !(this.articleID === el.id)
		})
	}

	selectProduct() {
		this.selectedProduct = this.products.filter((el: { id: any; }) => {
			return this.articleID === el.id
		})
	}

	@Watch('articleID') 
	watchArticleID() {
	}

	checkArticleImageIndex() {
		this.articleImageIndex = this.articleID.images.length
	}

	callInfoImage(index: number) {
		if (this.selectedProduct[index] == null) {
			return
		}
		return this.selectedProduct[index].images[this.imageIndex]
	}

	cuttingName(name: string): string {
		return name.substring(0,16) + '...'
	}

	priceType(price: number): string {
		var priceComma = String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		return priceComma
	}
}
</script>
