<template>
	<div :class="$style.index" v-if="isHotArticlesExists()">
		<div :class="[$style.articles, getStyleRow()]" v-for="(item, index) in getProducts().slice(0, getMaxLength())" :key="index">
			<router-link class="general-font-color-basic" :to="updateQueryID(item)">
				<img :src="item.images[imageIndex]">
				<span :class="$style.title">{{ getName(item) }}</span>
				<span :class="$style.price">{{ getPrice(item) }}원</span>
				<span>{{ item.registered_by.location }}</span>
				<span class="general-font-color-basic-2">관심 {{ item.likes }}∙채팅 {{ item.chats }}</span>
			</router-link>
		</div>
    </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/utils.scss';

.index {
	width: 100%;

	display: flex;
	flex-wrap: wrap;

	> .articles {
		width: calc(25% - 44px);
		
		display: flex;

		margin-right: 56px;
		margin-bottom: 56px;

		@include mobile {
			width: 50%;

			margin-right: 0px;
			padding-left: 24px;
			padding-right: 12px;
		}

		> a {
			display: block;
			
			> img {
				aspect-ratio: 1 / 1;
				width: 100%;

				margin-bottom: 10px;

				border-radius: 12px;

				@include mobile {
					height: auto;
				}
			}

			
			> span {
				width: 100%;

				display: inline-block;
				
				font-size: 13px;

				padding-bottom: 4px;
			}

			> .title {
				font-size: 16px;
			}

			> .price {
				font-size: 15px;
				font-weight: bold;
			}
		}
	}

	> .articles:nth-child(4n) {
		margin-right: 0px;
	}

	> .articles:nth-child(2n) {
		@include mobile {
			padding-left: 12px;
			padding-right: 24px;
		}
	}

	> .articles.row3 {
		width: calc(33% - 16px);
		
		margin-right: 27px;
		margin-bottom: 56px;

		@include mobile {
			width: 50%;

			margin-right: 0px;
			padding-left: 20px;
			padding-right: 10px;
		}

		> a {
			width: 100%; 
			
			cursor: pointer;
			
			> img {
				aspect-ratio: 1 / 1;
				width: 100%;

				margin-bottom: 10px;

				border-radius: 12px;
			}

			
			> span {
				width: 100%;

				display: inline-block;
				
				font-size: 13px;

				padding-bottom: 4px;
			}

			> .title {
				font-size: 16px;
			}

			> .price {
				font-size: 15px;
				font-weight: bold;
			}
		}
	}

	> .articles.row3:nth-child(3n) {
		margin-right: 0px;
	}

	> .articles.row3:nth-child(2n) {
		@include mobile {
			padding-left: 10px;
			padding-right: 20px;
		}
	}
}

</style>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { Product } from '@/structure/types';
import { cutName, priceType } from '@/utils/format';
import { RawLocation } from 'vue-router';

@Component
export default class HotArticlesList extends Vue {
	@Prop() maxLength?: number
	@Prop() row?: number
	@Prop() products?: Product[]
	imageIndex: number = 0
	

	isHotArticlesExists(): boolean {
		return this.products != null
	}

	updateQueryID(item: Product): RawLocation {
		return {name: 'articles', query: {id : item.id}}
	}

	getProducts(): Product[] {
		return this.products ?? []
	}

	getMaxLength(): number {
		return this.maxLength ?? 0
	}

	getName(item: Product): string {
		return cutName(item.name, 14)
	}

	getPrice(item: Product): string {
		return priceType(item)
	}
	
	getStyleRow(): string {
		// @ts-ignore
		return this.row == 3 ? this.$style.row3 : ""
	}
}
</script>
