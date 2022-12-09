<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="$style.hotArticles">
				<div :class="$style.contents">
					<div :class="$style.title">
						<span>중고거래 인기매물</span>
					</div>
					<div :class="$style.list" v-if="isProductsLoaded()">
						<div :class="[$style.articles, lrCheck(index)]" v-for="(item, index) in products" :key="index">
							<router-link class="general-font-color-basic" :to="{name: 'articles', query: {id : item.id}}">
								<img :src="item.images[imageIndex]">
								<span :class="$style.title" v-if="item.name.length >= 15">{{ cuttingName(item.name) }}</span>
								<span :class="$style.title" v-else>{{ item.name }}</span>
								<span :class="$style.price">{{ priceType(item.price) }}원</span>
								<span>{{ item.registered_by.location }}</span>
								<span class="general-font-color-basic-2">관심 {{ item.likes }}∙채팅 {{ item.chats }}</span>
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

		> .hotArticles {
			padding-bottom: 60px;

			> .contents {
				width: 980px;

				margin: 0 auto;

				> .title {
					text-align: center;

					font-size: 32px;
					font-weight: bold;
					
					padding-bottom: 80px;
				}

				> .list {
					display: flex;
					flex-wrap: wrap;

					> .articles {
						width: 201px;
						
						display: flex;

						margin-right: 56px;
						margin-bottom: 56px;

						> a {
							display: block;
							
							> img {
								width: 100%;
								height: 201px;

								margin-bottom: 10px;

								border-radius: 12px;
							}

							
							> span {
								width: 100%;

								display: inline-block;
								
								font-size: 13px;

								padding-bottom: 4px;
							}

							> .title {
								font-size: 16px;
							}

							> .price {
								font-size: 15px;
								font-weight: bold;
							}
						}
					}

					> .articles.right {
						margin-right: 0px;
					}
				}

				> .hotArticlesLink {
					text-align: center;

					font-size: 16px;

					padding-bottom: 120px;
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
export default class HotArticles extends Vue {
	products: any = ContentsJsonFile.products
	imageIndex: number = 0

	isProductsLoaded(): boolean {
		if (this.products == null) {
			return false
		}
		return true
	}

	lrCheck(index: number) {
		if (((index + 1) % 4) == 0) {
			// @ts-ignore
			return this.$style.right
		}

		return
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
