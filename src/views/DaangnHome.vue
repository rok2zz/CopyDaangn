<template>
  <div :class="$style.index">
    <div :class="[$style.container, 'general-font-color-black-2529']">
		<div :class="$style.landingContainer">
		</div>
		<div :class="[$style.hotArticlesContainer, 'background-color-gray']">
			<div :class="$style.hotArticlesContents">
				<div :class="$style.hotArticlesTitle">
					<span>중고거래 인기매물</span>
				</div>
				<div :class="$style.hotArticlesList">
					<div :class="$style.hotArticles" v-for="(item, index) in products" :key="index" >
						<router-link class="general-font-color-black-2529" :to="('/articles?id=' + item.id)"  v-if="index < 4">
							<img :src="item.images[0]">
							<span :class="$style.articleTitle" v-if="(item.name.length >= 15)">{{ cuttingName(item.name) }}</span>
							<span :class="$style.articleTitle" v-else>{{ item.name }}</span>
							<span :class="$style.articlePrice">{{ priceType(item.price) }}원</span>
							<span :class="$style.articleLocation">{{ item.registered_by.location }}</span>
							<span class="general-font-color-gray-8e96">관심 {{ item.likes }}∙채팅 {{ item.chats }}</span>
						</router-link>
					</div>
				</div>
				<div :class="$style.hotArticlesLink">
					<router-link class="general-font-color-black-2529" to="/hot_articles">
						<span>인기매물 더 보기</span>
					</router-link>
				</div>
			</div>
		</div>
    </div>
  </div>
</template>

<style lang="scss" module>
.index {
	
	> .container {
		> .landingContainer {
			
			> .landingContents {
				width: 1024px;

				display: flex;

				margin: 0 auto;
				padding: 60px 16px;

				white-space: pre-wrap; 

				.landingImage {
					height: 100%;
				}

				> .leftLandingContents {
					width: 50%;

					> span {
						width: 100%;
						
						display: inline-block;

						font-size: 16px;

						padding-bottom: 32px;
					}

					> .landingSpan {
						font-size: 48px;
						font-weight: bold;

						line-height: 1.3;

						padding-top: 150px;
					}
				}

				> .rightLandingContents {
					width: 50%;
					
					
				}
			}
		}

		> .hotArticlesContainer {
			padding: 60px 0px;

			> .hotArticlesContents {
				width: 1024px;

				margin: 0 auto;

				> .hotArticlesTitle {
					text-align: center;

					font-size: 40px;
					font-weight: bold;		
					
					padding-top: 60px;
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
import { Component, Vue } from 'vue-property-decorator';
import LandingJsonFile from '@/assets/landing.json'

@Component({
    components: {
      // HelloWorld,
    },
})
export default class DaangnHome extends Vue {
	mode: string = this.$store.getters.getMode
	landing: any = LandingJsonFile.landing
	products: any = {}

	mounted() {
		this.products = this.$store.getters.getProducts
		
		this.$store.commit('setMode', 'light')
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
