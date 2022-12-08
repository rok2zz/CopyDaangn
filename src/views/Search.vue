<template>
	<div :class="$style.index">
		<div :class="[$style.container, 'general-font-color-basic','general-background-color-search']">
			<div :class="[$style.searchResult, 'general-background-color-light','general-border-color']">
				<div :class="$style.contents">
					<span>
						<span :class="$style.result">'{{ searchQuery }}'</span>에 대한 검색 결과가 없어요.<br>
						검색어를 다시 확인해 주세요!
					</span>
					<span :class="[$style.searchAgain, 'general-font-color-emphasize']">다시 검색하기</span>
				</div>
			</div>
			<div :class="[$style.hotArticles, 'general-background-color-light','general-border-color']">
				<div :class="$style.contents">
					<div :class="$style.title">
						<span :class="$style.titleSpan">인기 중고</span>
					</div>
					<div :class="$style.list" v-if="hotArticlesException()">
						<div :class="[$style.articles, lrCheck(index)]" v-for="(item, index) in products.slice(0, 6)" :key="index">
							<router-link class="general-font-color-basic" :to="{name: 'articles', query: {id : item.id}}">								
								<img :class="$style.right" :src="item.images[imageIndex]" v-if="(index % 3) == 0">
								<img :src="item.images[imageIndex]" v-else>
								<span :class="$style.title" v-if="item.name.length >= 12">{{ cuttingName(item.name) }}</span>
								<span :class="$style.title" v-else>{{ item.name }}</span>
								<span class="general-font-color-search">{{ item.registered_by.location }}</span>
								<span :class="[$style.priceLike, 'general-font-color-emphasize']">
									<span :class="$style.price">{{ priceType(item.price) }}원</span>
									<span>♡<span class="general-font-color-basic">{{ item.likes }}</span></span>
								</span>
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
		padding: 30px 0px 40px 0px;
		margin-top: 24px;

		> .searchResult {
			width: 800px;

			margin: 0 auto;
			margin-bottom: 20px;

			border-radius: 8px;
			border-width: 1px;
			border-style: solid;

			> .contents {
				width: 100%;
				
				padding-top: 34px;
				padding-bottom: 24px;

				text-align: center;

				font-size: 16px;

				> span {
					width: 100%;

					display: inline-block;

					> .result {
						font-weight: bold;
					}
				}

				> .searchAgain {
					font-weight: bold;

					cursor: pointer;
				}
			}
		}

		> .hotArticles {
			width: 800px;

			margin: 0 auto;
			margin-bottom: 20px;

			border-radius: 8px;
			border-width: 1px;
			border-style: solid;
			
			> .contents {
				width: 720px;

				margin: 0 auto;
				padding-top: 32px;

				> .title {
					width: 100%;

					text-align: left;

					padding-bottom: 32px;

					> span {
						display: inline-block;
					}

					> .titleSpan {
						width: 100%;

						font-size: 18px;
						font-weight: bold;
					}
				}

				> .list {
					width: 100%;

					display: flex;
					flex-wrap: wrap;

					> .articles {
						width: calc(33% - 34px);

						margin-right: 34px;

						margin-bottom: 56px;

						> a {
							display: block;

							text-decoration: none;

							cursor: pointer;
							
							> img {
								width: 100%;
								height: 187px;

								margin-bottom: 10px;

								border-radius: 12px;
							}
							
							> span {
								width: 100%;

								display: inline-block;
								
								font-size: 14px;

								padding-bottom: 4px;
							}

							> .title {
								font-size: 16px;
							}

							> .priceLike {
								display: flex;

								> .price {				
									width: 100%;
													
									font-size: 15px;
									font-weight: bold;
								}
							}
						}
					}

					> .articles.right {
						margin-right: 0px;
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
export default class Hot_Articles extends Vue {
	searchQuery: any = this.$route.query.q
	mode: string = this.$store.getters.getMode
	products: any = ContentsJsonFile.products
	imageIndex: number = 0

	mounted() {
		this.$store.commit('setMode', 'light')
	}

	hotArticlesException() {
		if (this.products == null) {
			return false
		}
		return true
	}

	lrCheck(index: number) {
		if (((index + 1) % 3) == 0) {
			// @ts-ignore
			return this.$style.right
		}

		return
	}

	cuttingName(name: string): string {
		return name.substring(0, 14) + '...'
	}

	priceType(price: number): string {
		var priceComma = String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		return priceComma
	}
}
</script>
