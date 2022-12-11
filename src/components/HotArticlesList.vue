<template>
	<div :class="$style.index" v-if="isHotArticlesExists()">
		<div :class="[$style.articles, getStyleRow()]" v-for="(item, index) in getProducts().slice(0, sliceIndex)" :key="index">
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
.index {
	width: 100%;

	display: flex;
	flex-wrap: wrap;

	> .articles {
		width: calc(25% - 44px);
		
		display: flex;

		margin-right: 56px;
		margin-bottom: 56px;

		> a {
			display: block;
			
			> img {
				width: 100%;
				height: 201px;

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

	> .articles:nth-child(4n) {
		margin-right: 0px;
	}

	> .articles.row3 {
		width: calc(33% - 16px);
		
		margin-right: 27px;
		margin-bottom: 56px;

		> a {
			width: 100%; 
			
			cursor: pointer;
			
			> img {
				width: 100%;
				height: 208px;

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
}

</style>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { Product, QueryID } from '@/structure/types';
import { cutName, priceType } from '@/utils/format';

@Component
export default class HotArticlesList extends Vue {
	@Prop() sliceIndex?: number = undefined
	@Prop() row?: number = undefined
	@Prop() products?: Product[] = undefined
	imageIndex: number = 0

	isHotArticlesExists(): boolean {
		return this.products != null
	}

	updateQueryID(item: Product): QueryID {
		return {name: 'articles', query: {id : item.id}}
	}

	getProducts(): Product[] {
		return this.products ?? []
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
