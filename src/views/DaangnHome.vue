<template>
  	<div :class="$style.index">
		<div :class="[$style.container, 'general-font-color-black-2529']">
			<div :class="[$style.landingContainer, $style.mainLanding, 'background-color-carrot-f7f2']">
				<div :class="[$style.landingContents, $style.landing0]">
					<div :class="[$style.leftLandingContents, $style.landing0]">
						<div :class="$style.landingSpanContainer">
							<span :class="$style.landingSpan">{{ landingCall(0).title }}</span>
							<span>{{ landingCall(0).contents }}</span>
						</div>
					</div>
					<div :class="[$style.rightLandingContents, $style.landing0]">
						<img :class="[$style.mainImage, 'background-color-carrot-f7f2']" :src="require('@/assets/landing1.webp')">
					</div>
				</div>
			</div>
			<div :class="$style.landingContainer">
				<div :class="$style.landingContents">
					<div :class="$style.leftLandingContents">
						<img :src="require('@/assets/landing2.webp')">
					</div>
					<div :class="[$style.rightLandingContents, $style.landing1]">
						<div :class="$style.landingSpanContainer">
							<span :class="$style.landingSpan">{{ landingCall(1).title }}</span>
							<span>{{ landingCall(1).contents }}</span>
							<div :class="$style.btnContainer">
								<router-link :class="$style.articlesBtn" to="/hot_articles">
									<button class="general-font-color-black-2529">{{ landingCall(1).button }}</button>
								</router-link>
								<router-link :class="$style.trustBtn" to="/">
									<button class="general-font-color-black-2529">{{ landingCall(1).button2 }}</button>
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div :class="[$style.landingContainer, 'background-color-green']">
				<div :class="$style.landingContents">
					<div :class="$style.leftLandingContents">
						<div :class="$style.landingSpanContainer">
							<span :class="$style.landingSpan">{{ landingCall(2).title }}</span>
							<span>{{ landingCall(2).contents }}</span>
							<div :class="$style.landingIcon">
								<div :class="$style.iconContents" v-for="(item, index) in landingCall(2).icon" :key="index">
									<img :src="require('@/assets/icon' + item.iconIndex + '.svg')">
									<span :class="$style.iconSpan">{{ item.title }}</span>
									<span>{{ item.contents }}</span>
								</div>
							</div>
						</div>
					</div>
					<div :class="$style.rightLandingContents">
						<img :src="require('@/assets/landing3.webp')">
					</div>
				</div>
			</div>
			<div :class="$style.landingContainer">
				<div :class="$style.landingContents">
					<div :class="$style.leftLandingContents">
						<img :src="require('@/assets/landing4.webp')">
					</div>
					<div :class="[$style.rightLandingContents, $style.landing3]">
						<div :class="$style.landingSpanContainer">
							<span :class="$style.landingSpan">{{ landingCall(3).title }}</span>
							<span>{{ landingCall(3).contents }}</span>
							<div :class="$style.btnContainer">
								<router-link :class="$style.articlesBtn" to="/">
									<button class="general-font-color-black-2529">{{ landingCall(3).button }}</button>
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div :class="[$style.hotArticlesContainer, 'background-color-gray']">
				<div :class="$style.hotArticlesContents">
					<div :class="$style.hotArticlesTitle">
						<span>중고거래 인기매물</span>
					</div>
					<div :class="$style.hotArticlesList">
						<div :class="$style.hotArticles" v-for="(item, index) in products" :key="index" >
							<router-link class="general-font-color-black-2529" :to="{name: 'articles', query: {id : item.id}}"  v-if="index < 4">
								<img :src="item.images[0]">
								<span :class="$style.articleTitle" v-if="item.name.length >= 15">{{ cuttingName(item.name) }}</span>
								<span :class="$style.articleTitle" v-else>{{ item.name }}</span>
								<span :class="$style.articlePrice">{{ priceType(item.price) }}원</span>
								<span :class="$style.articleLocation">{{ item.registered_by.location }}</span>
								<span class="general-font-color-gray-8e96">관심 {{ item.likes }} ∙ 채팅 {{ item.chats }}</span>
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
			padding: 60px 0px;
			
			> .landingContents {
				width: 1024px;

				display: flex;

				margin: 0 auto;
				padding: 0px 16px;

				white-space: pre-wrap;

				span {					
					display: inline-block;

					font-size: 16px;
				}

				.landingSpan {
					font-size: 40px;
					font-weight: bold;

					padding-bottom: 24px;
				}
				

				> .leftLandingContents {
					display: flex;
					align-items: center;

					> img {
						width: 532px;
					}

					> .landingSpanContainer {

						> .landingIcon {
							display: flex;

							padding-top: 40px;

							> .iconContents {
								width: calc(100% / 3);

								> span {
									width: 100%;

									font-size: 13px;
								}

								> .iconSpan {
									font-size: 14px;

									padding-top: 16px;
									padding-bottom: 8px;
								}
							}
						}
					}
				}

				> .leftLandingContents.landing0 {
					width: 400px;
					
					padding-bottom: 60px;
				}

				> .rightLandingContents {
					display: flex;
					align-items: center;

					> img {
						width: 546px;
					}

					> .landingSpanContainer {
					
						> .btnContainer {
							> a {
								> button {
									font-size: 18px;
									font-weight: bold;
									
									margin-top: 40px;
									padding: 14.5px 26px;

									border: none;
									border-radius: 5px;
								}

								> button:hover {
									cursor: pointer;
								}
							}

							> .trustBtn {
								margin-left: 16px;
							}
						}
					}
				}
				> .rightLandingContents.landing0 {
										
					> img {
						width: 802px;
					}
				}

				> .rightLandingContents.landing1 {
					padding-left: 48px;
				}

				> .rightLandingContents.landing3 {
					padding-left: 100px;
				}
			}

			> .landingContents.landing0 {
				width: 1200px;
			}
		}

		> .landingContainer.mainLanding {
			padding-bottom: 0px;
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
import ContentsJsonFile from '@/assets/contents.json'

@Component({
    components: {
      // HelloWorld,
    },
})
export default class DaangnHome extends Vue {
	mode: string = this.$store.getters.getMode
	landing: any = LandingJsonFile.landing
	products: any = ContentsJsonFile.products

	mounted() {
		this.$store.commit('setMode', 'light')
	}

	landingCall(index: number) {
		if (this.landing[index] == null) {
			return
		}

		return this.landing[index]
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
