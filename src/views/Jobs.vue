<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="[$style.contents, 'background-color-jobs']">
				<div :class="$style.albaBanner">
					<div :class="[$style.leftBanner, 'general-font-color-basic-3']">
						<span :class="$style.bannerSpan">우리 동네에서 찾는 <br> 당근알바</span>
						<span>걸어서 10분 거리의<br>동네 알바들 여기 다 있어요.</span>
					</div>
					<div :class="$style.rightBanner">
						<img :src="require('@/assets/alba_banner.png')">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" module>
.index {

	> .container {
		
		> .contents {
			height: 315px;

			display: flex;

			> .albaBanner {
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
					}

					> .bannerSpan {
						width: 100%;

						font-size: 32px;
						font-weight: bold;

						padding-bottom: 16px;
					}
				}

				> .rightBanner {
					width: 50%;

					> img {
						width: 603px;

						padding-top: 7px;
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
export default class Jobs extends Vue {
	mounted() {
		this.$store.commit('setMode', "dark")
	}
}
</script>
