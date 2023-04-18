<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="[$style.contents, 'general-background-color-jobs']">
				<div :class="$style.albaBanner">
					<div :class="[$style.leftBanner, 'general-font-color-basic-3']">
						<span :class="$style.bannerSpan">우리 동네에서 찾는 <br> 당근알바</span>
						<span :class="$style.bannerSpan2">걸어서 10분 거리의<br>동네 알바들 여기 다 있어요.</span>
					</div>
					<div :class="$style.rightBanner">
						<img :src="require('@/assets/images/alba_banner.png')">
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
			height: 315px;

			display: flex;

			@include mobile {
				width: 100%;
				height: 294px;

				display: block;
			}

			> .albaBanner {
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
					}

					> .bannerSpan {
						width: 100%;

						font-size: 32px;
						font-weight: bold;

						padding-bottom: 16px;

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
						
						overflow: hidden;
					}

					> img {
						width: 603px;

						padding-top: 7px;

						@include mobile {
							width: 400px;

							padding-top: 12px;
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
export default class Jobs extends Vue {
	
	mounted() {
		this.$store.commit('setMode', 'dark')
	}
}
</script>
