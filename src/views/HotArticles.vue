<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="$style.hotArticles">
				<div :class="$style.contents">
					<div :class="$style.title">
						<span>중고거래 인기매물</span>
					</div>
					<div :class="$style.list">
						<HotArticlesList :sliceIndex="8" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" module>
.index {
	
	> .container {

		> .hotArticles {
			padding-bottom: 60px;

			> .contents {
				width: 980px;

				margin: 0 auto;

				> .title {
					text-align: center;

					font-size: 32px;
					font-weight: bold;
					
					padding-bottom: 80px;
				}

				> .list {
					display: flex;
					flex-wrap: wrap;
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
import HotArticlesList from '@/components/HotArticlesList.vue';

@Component({
	components: {
		HotArticlesList
	},
})
export default class HotArticles extends Vue {}
</script>
