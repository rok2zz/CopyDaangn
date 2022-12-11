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
					<div :class="$style.list">
						<SearchHotArticles />
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

					padding-bottom: 20px;

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
import SearchHotArticles from '@/components/SearchHotArticles.vue';


@Component({
	components: {
		SearchHotArticles
	},
})
export default class Search extends Vue {
	searchQuery: any = this.$route.query.q

	mounted() {
		this.$store.commit('setMode', 'light')
	}
}
</script>
