<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="[$style.realtyBanner, 'background-color-sky']">
				<div :class="[$style.banner, 'general-font-color']">
					<div :class="$style.leftBanner">
						<span :class="$style.bannerSpan">복비없이 투명한 <br> 부동산 직거래</span>
						<span>이웃이 살던 집, 당근마켓에서 <br> 편하게 직거래해보세요.</span>
					</div>
					<div :class="$style.rightBanner">
						<img :class="$style.realtyBannerImage" :src="require('@/assets/budongsan_banner.png')">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" module>
.index {

	> .container {
		
		> .realtyBanner {
			height: 315px;

			display: flex;

			> .banner {
				width: 800px;

				display: flex;

				margin: 0 auto;
				padding: 12px;
				padding-top: 48px;
				
				> .leftBanner {
					width: 50%;

					span {
						display: inline-block;

						font-size: 18px;

						margin-top: 16px;

					}

					> .bannerSpan {
						width: 100%;

						font-size: 32px;
						font-weight: bold;
					}
				}

				> .rightBanner {
					width: 50%;

					> .realtyBannerImage {
						width: 485px;
					}
				}
			}
		}
	}
}

</style>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';


@Component({
	components: {
		// HelloWorld,
	},
})
export default class Realty extends Vue {
	mode: string = this.$store.getters.getMode
	
	mounted() {
		this.$store.commit('setMode', "dark")
	}

	
}
</script>
