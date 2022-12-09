<template>
	<div :class="$style.index">
		<div :class="[$style.container, 'general-background-color-imageview']">
			<div :class="$style.contents">
				<img :class="$style.bigImage" :src="imageAddress">
				<img :class="$style.close" :src="require('@/assets/close.svg')" v-on:click="closeImageView">
			</div>
		</div>
	</div>
</template>

<style lang="scss" module>

.index {
	> .container {
		width: 100%;
		height: 100%;

		display: flex;
		position: fixed;
		top: 0px;
		left: 0px;
		align-items: center;

		z-index: 3;

		> .contents {
			width: 768px;

			margin: 0 auto;
			

			> .bigImage {
				width: 768px;
			}

			> .close {
				position: absolute;
				top: 20px;
				right: 80px;
				cursor: pointer;
			}
		}
	}
}

</style>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import ContentsJsonFile from '@/assets/contents.json'

@Component({
	components: {
		// HelloWorld,
	},
})
export default class ImageView extends Vue {
	articleID: any = this.$route.query.id
	imageAddress: any = this.$route.query.address

	closeImageView() {
		history.back()
	}
}
</script>
