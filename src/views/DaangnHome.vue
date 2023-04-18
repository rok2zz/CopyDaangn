<template>
  	<div :class="$style.index">
		<div :class="[$style.container, 'general-font-color-basic']">
			<!-- 랜딩 -->
			<div :class="[$style.landing, $style.main, 'general-background-color-landing-1']">
				<div :class="[$style.contents, $style.landing1]">
					<div :class="[$style.leftLanding, $style.landing1]">
						<div :class="$style.landingSpan">
							<span :class="$style.mainTitle">당신 근처의<br>당근마켓</span>
							<span :class="$style.sub">중고 거래부터 동네 정보까지, 이웃과 함께해 가깝고 따뜻한 당신의 근처를 만들어요.</span>
						</div>
					</div>
					<div :class="[$style.rightLanding, $style.landing1]">
						<img :class="[$style.landingImage, 'general-background-color-landing-1']" :src="require('@/assets/landing1.webp')">
						<img :class="$style.mobileLanding1" :src="require('@/assets/images/mobileLanding1.webp')" alt="">
					</div>
				</div>
			</div>

			<div :class="$style.landing">
				<div :class="$style.contents">
					<div :class="[$style.leftLanding, $style.webImage]">
						<img :src="require('@/assets/images/landing2.webp')">
					</div>
					<div :class="[$style.rightLanding, $style.landing2]">
						<div :class="$style.landingSpan">
							<span :class="$style.title">우리 동네<br>중고 직거래 마켓</span>
							<span :class="$style.subTitle">동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요</span>
							<div :class="$style.landingBtn">
								<router-link to="/hot_articles">
									<button class="general-font-color-basic">인기매물 보기</button>
								</router-link>
								<router-link to="/">
									<button class="general-font-color-basic">믿을 수 있는 중고거래</button>
								</router-link>
							</div>
						</div>
					</div>
					<div :class="[$style.leftLanding, $style.mobileImage]">
						<img :src="require('@/assets/images/landing2.webp')">
					</div>
				</div>
			</div>

			<div :class="[$style.landing, 'general-background-color-landing-3']">
				<div :class="$style.contents">
					<div :class="$style.leftLanding">
						<div :class="$style.landingSpan">
							<span :class="$style.title">이웃과 함께 하는<br>동네생활</span>
							<span :class="$style.subTitle">우리 동네의 다양한 이야기를 이웃과 함께 나누어요.</span>
							<div :class="$style.icon">
								<div :class="$style.contents">
									<img :src="require('@/assets/images/icon1.svg')">
									<span :class="$style.iconSpan">우리동네질문</span>
									<span>궁금한 게 있을 땐 이<br>웃에게 물어보세요.</span>
								</div>
								<div :class="$style.contents">
									<img :src="require('@/assets/images/icon1.svg')">
									<span :class="$style.iconSpan">동네분실센터</span>
									<span>무언가를 잃어버렸을 때, 함께 찾을 수 있어요 </span>
								</div>
								<div :class="$style.contents">
									<img :src="require('@/assets/images/icon1.svg')">
									<span :class="$style.iconSpan">동네모임</span>
									<span>관심사가 비슷한 이웃과 온오프라인으로 만나요.</span>
								</div>
							</div>
						</div>
					</div>
					<div :class="$style.rightLanding">
						<img :src="require('@/assets/images/landing3.webp')">
					</div>
				</div>
			</div>

			<div :class="$style.landing">
				<div :class="$style.contents">
					<div :class="[$style.leftLanding, $style.webImage]">
						<img :src="require('@/assets/images/landing4.webp')">
					</div>
					<div :class="[$style.rightLanding, $style.landing4]">
						<div :class="$style.landingSpan">
							<span :class="$style.title">내 근처에서 찾는<br>동네가게</span>
							<span>우리 동네 가게를 찾고 있나요?<br>동네 주민이 남긴 진짜 후기를 함꼐 확인해보세요!</span>
							<div :class="$style.landingBtn">
								<router-link to="/">
									<button class="general-font-color-basic">당근마켓 동네가게 찾기</button>
								</router-link>
							</div>
						</div>
					</div>
					<div :class="[$style.leftLanding, $style.mobileImage]">
						<img :src="require('@/assets/images/landing4.webp')">
					</div>
				</div>
			</div>

			<!-- 인기매물 -->
			<div :class="[$style.hotArticles, 'general-background-color-search']">
				<div :class="$style.contents">
					<div :class="$style.title">
						<span>중고거래 인기매물</span>
					</div>
					<div :class="$style.list">
						<HotArticlesList :maxLength="4" :products="products"/>
					</div>
					<div :class="$style.link">
						<router-link class="general-font-color-basic" to="/hot_articles">
							<span>인기매물 더 보기</span>
						</router-link>
					</div>
				</div>
			</div>

			<!-- 인기 검색어 -->
			<div :class="$style.hotKeywords">
				<div :class="$style.contents">
					<router-link class="general-font-color-basic" to="/top_keywords">
						중고거래 인기검색어
					</router-link>
					<div :class="$style.keywordsList" v-if="isKeywordsExists()">
						<span v-for="(item, index) in keywords.slice(0, 10)" :key="index">
							<router-link class="general-font-color-basic" :to="updateSearchQuery(item)">{{ item.word }}</router-link>
						</span>
					</div>
				</div>
			</div>
		</div>
  	</div>
</template>

<style lang="scss" module>
@import '@/assets/scss/utils.scss';

.index {
	> .container {

		> .landing {
			padding: 60px 0px;

			@include mobile {
				width: 100%;
			}
			
			> .contents {
				width: 1024px;

				display: flex;

				margin: 0 auto;
				padding: 0px 16px;

				white-space: pre-wrap;

				@include mobile {
					width: 100%;

					display: block;

					text-align: center;
				}

				span {					
					display: inline-block;

					font-size: 16px;
				}

				.title {
					font-size: 40px;
					font-weight: bold;

					padding-bottom: 24px;

					@include mobile {
						width: 100%;

						font-size: 28px;
					}
				}

				.mainTitle {
					font-size: 48px;
					font-weight: bold;
					
					padding-bottom: 24px;

					@include mobile {
						width: 100%;

						font-size: 32px;
					}
				}

				.sub {
					width: 300px;
				}

				.subTitle {
					@include mobile {
						width: 200px;
					}
				}

				> .leftLanding {
					display: flex;
					align-items: center;

					@include mobile {
						width: 100%;

						display: block;
					}

					> img {
						width: 532px;

						@include mobile {
							width: 300px;
						}
					}

					> .landingSpan {

						> .icon {
							display: flex;

							padding-top: 40px;

							@include mobile {
								display: none;
							}

							> .contents {
								width: calc(100% / 3);

								> span {
									width: 127px;

									font-size: 13px;
								}

								> .iconSpan {
									font-size: 14px;
									font-weight: bold;

									padding-top: 16px;
									padding-bottom: 8px;
								}
							}
						}
					}
				}

				> .leftLanding.landing1 {
					width: 35%;

					padding-left: 60px;
					padding-bottom: 130px;

					@include mobile {
						width: 100%;

						padding-left: 0px;
						padding-bottom: 30px
					}
				}

				> .leftLanding.webImage {
					@include mobile {
						display: none;
					}
				}

				> .leftLanding.mobileImage {
					display: none;

					@include mobile {
						display: block;
					}
				}

				> .rightLanding {
					display: flex;
					align-items: center;

					@include mobile {
						display: block;
					}

					> img {
						width: 546px;

						@include mobile {
							width: 300px;
						}
					}

					> .landingSpan {
						> .landingBtn {
							
							@include mobile {
								width: 300px;

								margin: 0 auto;
							}

							> a {

								> button {
									font-size: 18px;
									font-weight: bold;
									
									margin-top: 40px;
									padding: 14.5px 26px;

									border: none;
									border-radius: 5px;

									@include mobile {
										width: 250px;

										margin-top: 20px;
									}
								}

								> button:hover {
									cursor: pointer;
								}
							}

							> a:nth-child(2) {
								margin-left: 16px;

								@include mobile {
									margin-left: 0px;
								}
							}
						}
					}
				}
				
				> .rightLanding.landing1 {
					width: 60%;

					@include mobile {
						width: 100%;
					}

					> .landingImage {
						width: 802px;

						@include mobile {
							display: none;
						}
					}

					> .mobileLanding1 {
						display: none;

						@include mobile {
							width: 300px;

							display: block;

							margin: 0 auto;
						}
					}
				}

				> .rightLanding.landing2 {
					padding-left: 48px;

					@include mobile {
						padding-left: 0px;
					}
				}

				> .rightLanding.landing3 {
					padding-left: 20px;

					@include mobile {
						padding-left: 0px;
					}
				}

				> .rightLanding.landing4 {
					padding-left: 120px;

					@include mobile {
						padding-left: 0px;
					}
				}
			}

			> .contents.landing1 {
				width: 1200px;
				
				@include mobile {
					width: 100%;
				}
			}
		}

		> .landing.main {
			padding-bottom: 0px;
		}

		> .hotArticles {
			padding: 60px 0px;

			> .contents {
				width: 1024px;

				margin: 0 auto;

				@include mobile {
					width: auto;
					min-width: 320px;
				}

				> .title {
					text-align: center;

					font-size: 40px;
					font-weight: bold;		
					
					padding-top: 60px;
					padding-bottom: 80px;

					@include mobile {
						font-size: 28px;

						padding-bottom: 48px;
					}
				}

				> .list {
					display: flex;
					flex-wrap: wrap;
				}

				> .link {
					text-align: center;

					font-size: 16px;
					font-weight: bold;

					padding-bottom: 120px;

					@include mobile {
						padding-bottom: 0px;
					}
				}
			}
		}

		> .hotKeywords {
			padding: 40px 0px;

			> .contents {
				width: 1024px;
				
				margin: 0 auto;
				text-align: center;

				@include mobile {
					width: 312px;
				}

				> a {
					font-weight: bold;
				}

				> .keywordsList {
					width: 750px;

					display: flex;
					align-items: center;

					margin: 0 auto;

					@include mobile {
						width: 312px;

						flex-wrap: wrap;
						
						margin-top: 24px;
					}

					> span {
						width: 10%;
						margin-top: 16px;
						margin-bottom: 8px;

						@include mobile {
							width: 25%;
						}
						
						> a {
							text-decoration: none;
						}

						> a:hover {
							text-decoration: underline;
						}
					}

					> span:nth-child(n+5) {
						@include mobile {
							width: 33%;
						}
					}
				}
			}
		}
	}
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Keyword, Product } from '@/structure/types';
import { RawLocation } from 'vue-router';
import ContentsJsonFile from '@/assets/json/contents.json'
import KeywordsJsonFile from '@/assets/json/topKeywords.json'
import HotArticlesList from '@/components/HotArticlesList.vue';

@Component({
    components: {
     	HotArticlesList
    },
})
export default class DaangnHome extends Vue {
	mode: string = this.$store.getters.getMode
	products: Product[] = ContentsJsonFile.products as Product[]
	keywords: Keyword[] = KeywordsJsonFile.keywords as Keyword[]


	mounted() {
		this.$store.commit('setMode', 'light')
	}

	isHotArticlesExists(): boolean {
		return this.products != null
	}

	isKeywordsExists(): boolean {
		return this.keywords != null
	}

	updateSearchQuery(keyword: Keyword): RawLocation {
		return {name: 'search', query: {q: keyword.word}};
	}
}
</script>
