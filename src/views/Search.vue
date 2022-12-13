<template>
	<div :class="$style.index">
		<div :class="[$style.container, 'general-font-color-basic','general-background-color-search']">
			<!-- 검색 결과 -->
			<div :class="[$style.searchResult, 'general-background-color-light','general-border-color']">
				<div :class="$style.contents">
					<span>
						<span :class="$style.result">'{{ getSearchQuery() }}'</span>에 대한 검색 결과가 없어요.<br>
						검색어를 다시 확인해 주세요!
					</span>
					<span :class="[$style.searchAgain, 'general-font-color-emphasize']">다시 검색하기</span>
				</div>
			</div>

			<!-- 인기 품목 -->
			<div :class="[$style.hotArticles, 'general-background-color-light','general-border-color']">
				<div :class="$style.contents">
					<div :class="[$style.title, 'general-border-bottom-color']">
						<span :class="$style.titleSpan">인기 중고</span>
					</div>
					<div :class="$style.list">
						<SearchHotArticles />
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
		width: 100%;
		padding: 30px 0px 40px 0px;

		> .searchResult {
			width: 800px;

			margin: 0 auto;
			margin-bottom: 20px;

			border-radius: 8px;
			border-width: 1px;
			border-style: solid;

			@include mobile {
				width: calc(100% - 50px);
				min-width: 320px;
			}

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

			@include mobile {
				width: calc(100% - 50px);
				min-width: 320px;
			}
			
			> .contents {
				width: 720px;

				margin: 0 auto;
				padding-top: 32px;

				@include mobile {
					width: 100%;
					padding-top: 0px;
				}

				> .title {
					width: 100%;

					text-align: left;

					padding-bottom: 20px;

					@include mobile {
						padding: 16px;

						border-bottom-width: 1px;
						border-bottom-style: solid
					}

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
				}
			}
		}
	}
}

</style>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { unwrapQuery } from '@/utils/format';
import SearchHotArticles from '@/components/SearchHotArticles.vue';

@Component({
	components: {
		SearchHotArticles
	},
})
export default class Search extends Vue {
	searchQuery: string = ""

	mounted() {
		this.$store.commit('setMode', 'light')
		this.init()
	}

	init() {
		this.searchQuery = unwrapQuery(this.$route.query.q)
		console.log(this.searchQuery)
	}

	getSearchQuery(): string {
		return this.searchQuery ?? "알 수 없음"
	}

	@Watch('$route.query')
	updateUrlQuery() {
		this.init()
	}
}
</script>
