<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="$style.imageContainer">
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

		position: relative;


		> .imageContainer {
			width: 768px;

			margin: 0 auto;
			padding: 300px 0px;

			


			> .bigImage {
				width: 768px;
			}

			> .close {
				position: absolute;
				top: 20px;
				right: 20px;
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
export default class Hot_Articles extends Vue {
	articleID: any = this.$route.query.id
	imageAddress: any = this.$route.query.address

	closeImageView() {
		history.back()
	}
}
</script>
