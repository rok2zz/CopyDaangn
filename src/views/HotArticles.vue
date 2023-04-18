<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="$style.hotArticles">
				<div :class="$style.contents">
					<div :class="$style.title">
						<span>중고거래 인기매물</span>
					</div>
					<div :class="$style.list">
						<HotArticlesList :maxLength="8" :products="products" />
					</div>
					<div :class="[$style.mobile, 'general-background-color-search']">
						<span :class="$style.title">더 구경하고 싶나요?</span>
						<span :class="$style.subTitle">당근마켓 앱에서 따뜻하 거래를 직접 경험해보세요!</span>
						<a href="https://play.google.com/store/apps/details?id=com.towneers.www&hl=ko">
							<button class="general-background-color-emphasize general-font-color">당근마켓 다운로드</button>
						</a>
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

		> .hotArticles {
			padding-bottom: 60px;

			@include mobile {
				padding-bottom: 0px;
			}

			> .contents {
				width: 980px;

				margin: 0 auto;

				@include mobile {
					width: 100%;
					min-width: 360px;
				}

				> .title {
					text-align: center;

					font-size: 32px;
					font-weight: bold;
					
					padding-bottom: 80px;

					@include mobile {
						font-size: 24px;

						padding-bottom: 30px;
					}
				}

				> .list {
					display: flex;
					flex-wrap: wrap;
				}
				
				> .mobile {
					display: none;

					text-align: center;

					font-size: 20px;

					padding: 60px 0px;

					@include mobile {
						display: block;
					}

					> .subTitle {
						width: 100%;

						display: inline-block;
						
						font-size: 15px;
					}

					> .title {
						font-weight: bold;
					}

					> a {
						> button {
							width: 226px;
							height: 53px;

							font-size: 20px;

							border-radius: 8px;

							border: none;

							margin-top: 12px;

							cursor: pointer;
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
import { Product } from '@/structure/types';
import HotArticlesList from '@/components/HotArticlesList.vue';
import ContentsJsonFile from '@/assets/json/contents.json'

@Component({
	components: {
		HotArticlesList
	},
})
export default class HotArticles extends Vue {
	products: Product[] = ContentsJsonFile.products as Product[]
}
</script>
