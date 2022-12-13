<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="[$style.keywordsRanking, 'general-font-color-basic']">
				<span :class="$style.title">
					오늘의 중고 인기 검색어
				</span>
				<keywords />
			</div>
		</div>
	</div>
</template>

<style lang="scss" module>
@import '@/assets/scss/utils.scss';

.index {
	> .container {
		width: 100%;

		> .keywordsRanking {
			width: 1024px;

			margin: 0 auto;
			text-align: center;

			padding-bottom: 80px;

			@include mobile {
				width: 300px;
			}

			> .title {
				display: inline-block;

				font-size: 32px;
				font-weight: bold;

				padding-bottom: 40px;

				@include mobile {
					font-size: 24px;

					padding-bottom: 30px;
				}
			}
		}
	}
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Keywords from '@/components/Keywords.vue'

@Component({
	components: {
		Keywords
	},
})
export default class TopKeywords extends Vue {

	mounted() {
		this.$store.commit('setMode', 'light')
	}
}
</script>
