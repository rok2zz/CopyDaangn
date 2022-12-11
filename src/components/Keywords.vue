<template>
	<div :class="$style.index">
		<div :class="[$style.rankingList, 'general-border-bottom-color']" v-for="(item, index) in keywords" :key="index">
			<span :class="$style.ranking">
				<span>{{ index + 1 }}</span>
			</span>
			<span :class="[$style.search, 'general-font-color-basic']" v-on:click="updateSearchQuery(item)">{{ item.word }}</span>
			<span :class="$style.pointer" v-if="isChangesExists(item)">
				<span v-if="item.changes > 0"><span class="general-pointer-color-up">↑</span>{{ item.changes }}</span>
				<span v-else-if="item.changes < 0"><span class="general-pointer-color-down">↓</span>{{ -item.changes }}</span>
				<span v-else-if="item.changes == 0">-</span>
			</span>
		</div>
    </div>
</template>

<style lang="scss" module>
.index {
	> .rankingList {
		width: 414px;

		display: flex;
		margin: 0 auto;

		padding: 10px 16px;

		border-bottom-width: 1px;
		border-bottom-style: solid;

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

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Keyword } from '@/structure/types';
import KeywordsJsonFile from '@/assets/topKeywords.json'

@Component
export default class Keywords extends Vue {
	keywords: Keyword[] = KeywordsJsonFile.keywords

	updateSearchQuery(keyword: Keyword) {
		this.$store.commit('setSearchQuery', keyword)

		this.$router.push({name: 'search', query: {q: keyword.word}});
	}
 	
	isChangesExists(item: Keyword): boolean {
		return item.changes != null 
	}
}
</script>
