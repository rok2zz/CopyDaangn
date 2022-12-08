<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="[$style.keywordsRanking, 'general-font-color-basic']">
				<span :class="$style.title">
					오늘의 중고 인기 검색어
				</span>
				<div :class="[$style.rankingList, 'general-border-bottom-color']" v-for="(item, index) in keywords" :key="index">
					<span :class="$style.ranking">
						<span>{{ index + 1 }}</span>
					</span>
					<span :class="[$style.search, 'general-font-color-basic']" v-on:click="daangnSearch(item.word)">{{ item.word }}</span>
					<span :class="$style.pointer" v-if="changeRanking(item.updown)">
						<span class="general-pointer-color-up" v-if="item.updown.pointer == '↑'">{{ item.updown.pointer }}</span>
						<span class="general-pointer-color-down" v-else>{{ item.updown.pointer }}</span>
					</span>
					<span v-if="changeRanking(item.updown)">{{ item.updown.number }}</span>
					<span v-else>-</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" module>
.index {
	
	> .container {
		width: 100%;

		> .keywordsRanking {
			width: 1024px;

			margin: 0 auto;
			text-align: center;

			padding-bottom: 80px;

			> .title {
				display: inline-block;

				font-size: 32px;
				font-weight: bold;

				padding-bottom: 40px;
			}

			> .rankingList {
				width: 414px;

				display: flex;
				margin: 0 auto;

				padding: 10px 16px;


				> span {
					font-size: 17px;
				}

				> .ranking {
					width: 25px;

					font-weight: bold;
					font-style: oblique;

					margin-right: 24px;

					text-align: right;

				}

				> .search {
					width: 100%;

					text-align: left;

					cursor: pointer;
				}

				> .search:hover {
					text-decoration: underline;
				}
			}
		}
	}
}

</style>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import KeywordsJsonFile from '@/assets/top_keywords.json'

@Component({
	components: {
		// HelloWorld,
	},
})
export default class Hot_Keywords extends Vue {
	keywords: any = KeywordsJsonFile.keywords

	mounted() {
		this.$store.commit('setMode', 'light')
	}

	daangnSearch(keyword: any) {
		this.$store.commit('setSearchQuery', keyword)

		this.$router.push({name: 'search', query: {q: keyword}});
	}
 	
	changeRanking(item: any) {
		if (item == "none") {
			return false
		}

		return true
	}
}
</script>
