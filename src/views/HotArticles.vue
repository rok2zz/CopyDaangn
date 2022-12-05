<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="$style.hotArticlesContainer">
				<div :class="$style.hotArticlesContents">
					<div :class="$style.hotArticlesTitle">
						<span>중고거래 인기매물</span>
					</div>
					<div :class="$style.hotArticlesList">
						<div :class="$style.hotArticles" v-for="(item, index) in products" :key="index">
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

		> .hotArticlesContainer {
			padding: 60px 0px;
			padding-top: 30px;

			> .hotArticlesContents {
				width: 1024px;

				margin: 0 auto;

				> .hotArticlesTitle {
					text-align: center;

					font-size: 40px;
					font-weight: bold;		
					
					padding-bottom: 80px;
				}

				> .hotArticlesList {
					display: flex;
					flex-wrap: wrap;

					> .hotArticles {
						width: 212px;
						
						display: flex;

						margin: 0px 22px;
						margin-bottom: 56px;

						> a {
							display: block;
							
							> img {
								width: 212px;
								height: 212px;

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
export default class Hot_Articles extends Vue {
	products: any = ContentsJsonFile.products

	cuttingName(name: string): string {
		return name.substring(0,16) + '...'
	}

	priceType(price: number): string {
		var priceComma = String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		return priceComma
	}
}
</script>
