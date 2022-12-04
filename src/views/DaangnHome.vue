<template>
  <div :class="$style.index">
    <div :class="[$style.container, 'general-font-color-2529']">
		<div :class="[$style.landingContainer, landingClassBackgroundColor(item.imageIndex)]" v-for="(item, index) in landing" :key="index">
			<div :class="[$style.landingContents, landingClassHeight(item.imageIndex)]">
				<div :class="$style.leftLandingContents" v-if="index % 2 == 0">
					<span :class="$style.landingSpan">{{ item.title }}</span>
					<span>{{ item.contents }}</span>
				</div>
				<div :class="$style.leftLandingContents" v-else>
					<img :class="$style.landingImage" :src="require('@/assets/landing' + item.imageIndex + '.webp')">
				</div>
				<div :class="$style.rightLandingContents" v-if="index % 2 == 0">
					<img :class="[$style.landingImage, landingClassBackgroundColor(item.imageIndex)]" :src="require('@/assets/landing' + item.imageIndex + '.webp')">
				</div>
				<div :class="$style.rightLandingContents" v-else>
				</div>
			</div>
		</div>
    </div>
  </div>
</template>

<style lang="scss" module>
.index {
	
	> .container {
		> .landingContainer {
			
			> .landingContents {
				width: 1024px;

				display: flex;

				margin: 0 auto;
				padding: 60px 16px;

				white-space: pre-wrap; 

				.landingImage {
					height: 100%;
				}

				> .leftLandingContents {
					width: 50%;

					> span {
						width: 100%;
						
						display: inline-block;

						font-size: 16px;

						padding-bottom: 32px;
					}

					> .landingSpan {
						font-size: 48px;
						font-weight: bold;

						line-height: 1.3;

						padding-top: 150px;
					}
				}

				> .rightLandingContents {
					width: 50%;
					
					
				}
			}

			> .landingContents.landingHeight684 {
				height: 684px;
			}

			> .landingContents.landingHeight740 {
				height: 740px;
			}

			> .landingContents.landingHeight735 {
				height: 735px;
			}
		}
	}
}

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LandingJsonFile from '@/assets/landing.json'

@Component({
    components: {
      // HelloWorld,
    },
})
export default class DaangnHome extends Vue {
	mode: string = this.$store.getters.getMode
	landing: any = LandingJsonFile.landing
	sales: any = {}

	mounted() {
		this.sales = this.$store.getters.getSales
		
		this.$store.commit('setMode', 'light')
	}

	landingClassBackgroundColor(index: number) {
		var backgroundColor: string = ""

		if (index == 1) {
			backgroundColor =  "background-color-carrot-f7f2"
		} else if (index == 3) {
			backgroundColor = "background-color-green"
		}

		return backgroundColor
	}

	landingClassHeight(index: number) {
		switch(index) {
			case 1:
				// @ts-ignore
				return this.$style.landingHeight684
				break
			case 2:
				// @ts-ignore
				return this.$style.landingHeight684
				break
			case 3:
				// @ts-ignore
				return this.$style.landingHeight740
			case 4:
				// @ts-ignore
				return this.$style.landingHeight735
				break
		}
	}
}
</script>
