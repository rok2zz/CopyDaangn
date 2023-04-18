<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="[$style.contents, 'general-background-color-realty']">
				<div :class="[$style.realtyBanner, 'general-font-color-basic-3']">
					<div :class="$style.leftBanner">
						<span :class="$style.bannerSpan">복비없이 투명한 <br> 부동산 직거래</span>
						<span :class="$style.bannerSpan2">이웃이 살던 집, 당근마켓에서 <br> 편하게 직거래해보세요.</span>
					</div>
					<div :class="$style.rightBanner">
						<img :src="require('@/assets/images/budongsan_banner.png')">
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
		
		> .contents {
			width: 100%;
			height: 315px;

			display: flex;

			@include mobile {
				height: 294px;

				display: block;
			}

			> .realtyBanner {
				width: 800px;

				display: flex;

				margin: 0 auto;
				padding: 12px;
				padding-top: 48px;

				@include mobile {
					width: 100%;

					display: initial;
				}
				
				> .leftBanner {
					width: 50%;

					@include mobile {
						width: 100%;

						padding-left: 12px;
					}

					span {
						display: inline-block;

						font-size: 18px;

						margin-top: 16px;
					}

					> .bannerSpan {
						width: 100%;

						font-size: 32px;
						font-weight: bold;

						margin-top: 0px;

						@include mobile {
							font-size: 24px;
						}
					}

					> .bannerSpan2 {
						@include mobile {
							display: none;
						}
					}
				}

				> .rightBanner {
					width: 50%;

					@include mobile {
						width: 100%;

						text-align: center;

						padding-top: 40px;
					}

					> img {
						width: 485px;

						@include mobile {
							width: 296px;
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


@Component
export default class Realty extends Vue {

	mounted() {
		this.$store.commit('setMode', 'dark')
	}
}
</script>
