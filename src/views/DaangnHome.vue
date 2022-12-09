<template>
  	<div :class="$style.index">
		<div :class="[$style.container, 'general-font-color-basic']">
			<div :class="[$style.landing, $style.main, 'general-background-color-landing-1']">
				<div :class="[$style.contents, $style.landing1]">
					<div :class="[$style.leftLanding, $style.landing1]">
						<div :class="$style.landingSpan">
							<span :class="$style.mainTitle">당신 근처의<br>당근마켓</span>
							<span>중고 거래부터 동네 정보까지, 이웃과 함께해<br>가깝고 따뜻한 당신의 근처를 만들어요.</span>
						</div>
					</div>
					<div :class="[$style.rightLanding, $style.landing1]">
						<img class="general-background-color-landing-1" :src="require('@/assets/landing1.webp')">
					</div>
				</div>
			</div>
			<div :class="$style.landing">
				<div :class="$style.contents">
					<div :class="$style.leftLanding">
						<img :src="require('@/assets/landing2.webp')">
					</div>
					<div :class="[$style.rightLanding, $style.landing2]">
						<div :class="$style.landingSpan">
							<span :class="$style.title">우리 동네<br>중고 직거래 마켓</span>
							<span>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요</span>
							<div :class="$style.landingBtn">
								<router-link :class="$style.articlesBtn" to="/hot_articles">
									<button class="general-font-color-basic">인기매물 보기</button>
								</router-link>
								<router-link :class="$style.trustBtn" to="/">
									<button class="general-font-color-basic">믿을 수 있는 중고거래</button>
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div :class="[$style.landing, 'general-background-color-landing-3']">
				<div :class="$style.contents">
					<div :class="$style.leftLanding">
						<div :class="$style.landingSpan">
							<span :class="$style.title">이웃과 함께 하는<br>동네생활</span>
							<span>우리 동네의 다양한 이야기를 이웃과 함께 나누어요.</span>
							<div :class="$style.icon">
								<div :class="$style.contents">
									<img :src="require('@/assets/icon1.svg')">
									<span :class="$style.iconSpan">우리동네질문</span>
									<span>궁금한 게 있을 땐 이<br>웃에게 물어보세요.</span>
								</div>
								<div :class="$style.contents">
									<img :src="require('@/assets/icon1.svg')">
									<span :class="$style.iconSpan">동네분실센터</span>
									<span>무언가를 잃어버렸을 때, 함께 찾을 수 있어요 </span>
								</div>
								<div :class="$style.contents">
									<img :src="require('@/assets/icon1.svg')">
									<span :class="$style.iconSpan">동네모임</span>
									<span>관심사가 비슷한 이웃과 온오프라인으로 만나요.</span>
								</div>
							</div>
						</div>
					</div>
					<div :class="$style.rightLanding">
						<img :src="require('@/assets/landing3.webp')">
					</div>
				</div>
			</div>

			<div :class="$style.landing">
				<div :class="$style.contents">
					<div :class="$style.leftLanding">
						<img :src="require('@/assets/landing4.webp')">
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
				</div>
			</div>

			<div :class="[$style.hotArticles, 'general-background-color-search']">
				<div :class="$style.contents">
					<div :class="$style.title">
						<span>중고거래 인기매물</span>
					</div>
					<div :class="$style.list" v-if="isHotArticlesExists()">
						<div :class="$style.articles" v-for="(item, index) in products.slice(0, 4)" :key="index" >
							<router-link class="general-font-color-basic" :to="{name: 'articles', query: {id : item.id}}">
								<img :src="item.images[imageIndex]">
								<span :class="$style.title" v-if="item.name.length >= 15">{{ cuttingName(item.name) }}</span>
								<span :class="$style.title" v-else>{{ item.name }}</span>
								<span :class="$style.price">{{ priceType(item.price) }}원</span>
								<span>{{ item.registered_by.location }}</span>
								<span class="general-font-color-basic-2">관심 {{ item.likes }} ∙ 채팅 {{ item.chats }}</span>
							</router-link>
						</div>
					</div>
					<div :class="$style.link">
						<router-link class="general-font-color-basic" to="/hot_articles">
							<span>인기매물 더 보기</span>
						</router-link>
					</div>
				</div>
			</div>


			<div :class="$style.hotKeywords">
				<div :class="$style.contents">
					<router-link class="general-font-color-basic" to="/top_keywords">
						중고거래 인기검색어
					</router-link>
					<div :class="$style.keywordsList" v-if="isKeywordsExists()">
						<span v-for="(item, index) in keywords.slice(0, 10)" :key="index">
							<span class="general-font-color-basic" v-on:click="daangnSearch(item.word)">{{ item.word }}</span>
						</span>
					</div>
				</div>
			</div>
		</div>
  	</div>
</template>

<style lang="scss" module>
.index {
	
	> .container {

		> .landing {
			padding: 60px 0px;
			
			> .contents {
				width: 1024px;

				display: flex;

				margin: 0 auto;
				padding: 0px 16px;

				white-space: pre-wrap;

				span {					
					display: inline-block;

					font-size: 16px;
				}

				.title {
					font-size: 40px;
					font-weight: bold;

					padding-bottom: 24px;
				}

				.mainTitle {
					font-size: 48px;
					font-weight: bold;
					
					padding-bottom: 24px;
				}
				

				> .leftLanding {
					display: flex;
					align-items: center;

					> img {
						width: 532px;
					}

					> .landingSpan {

						> .icon {
							display: flex;

							padding-top: 40px;

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
				}

				> .rightLanding {
					display: flex;
					align-items: center;

					> img {
						width: 546px;
					}

					> .landingSpan {
					
						> .landingBtn {

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
				
				> .rightLanding.landing1 {
					width: 60%;

					> img {
						width: 802px;
					}
				}

				> .rightLanding.landing2 {
					padding-left: 48px;
				}

				> .rightLanding.landing3 {
					padding-left: 20px;
				}

				> .rightLanding.landing4 {
					padding-left: 120px;
				}
			}

			> .contents.landing1 {
				width: 1200px;
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

				> .title {
					text-align: center;

					font-size: 40px;
					font-weight: bold;		
					
					padding-top: 60px;
					padding-bottom: 80px;
				}

				> .list {
					display: flex;
					flex-wrap: wrap;

					> .articles {
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
				}

				> .link {
					text-align: center;

					font-size: 16px;
					font-weight: bold;

					padding-bottom: 120px;
				}
			}
		}

		> .hotKeywords {
			padding: 40px 0px;

			> .contents {
				width: 1024px;
				
				margin: 0 auto;
				text-align: center;

				> a {
					font-weight: bold;
				}

				> .keywordsList {
					width: 928px;
					height: 56px;

					display: flex;
					align-items: center;

					margin: 0 auto;

					> span {
						width: 10%;
						
						> span {
							cursor: pointer;
						}

						> span:hover {
							text-decoration: underline;
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
import ContentsJsonFile from '@/assets/contents.json'
import KeywordsJsonFile from '@/assets/topKeywords.json'

@Component({
    components: {
      // HelloWorld,
    },
})
export default class DaangnHome extends Vue {
	mode: string = this.$store.getters.getMode
	products: any = ContentsJsonFile.products
	keywords: any = KeywordsJsonFile.keywords
	imageIndex: number = 0

	mounted() {
		this.$store.commit('setMode', 'light')
	}

	isHotArticlesExists(): boolean {
		if (this.products == null) {
			return false
		}

		return true
	}

	isKeywordsExists(): boolean {
		if (this.keywords == null) {
			return false
		}

		return true
	}

	daangnSearch(keyword: any) {
		this.$store.commit('setSearchQuery', keyword)

		this.$router.push({name: 'search', query: {q: keyword}});
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
