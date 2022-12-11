<template>
	<div :class="$style.index" v-if="isHotArticlesExists()">
		<div :class="$style.articles" v-for="(item, index) in products.slice(0, 6)" :key="index">
			<router-link class="general-font-color-basic" :to="updateQueryID(item)">								
				<img :src="item.images[imageIndex]">
				<span :class="$style.title">{{ getName(item) }}</span>
				<span class="general-font-color-search">{{ item.registered_by.location }}</span>
				<span :class="[$style.priceLike, 'general-font-color-emphasize']">
					<span :class="$style.price">{{ getPrice(item) }}원</span>
					<span class="general-font-color-basic">
						<img :src="require('@/assets/heart_small.svg')">{{ item.likes }}
					</span>
				</span>
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
		width: 217px;

		margin-right: 34px;

		margin-bottom: 56px;

		> a {
			display: block;

			text-decoration: none;

			cursor: pointer;
			
			> img {
				width: 100%;
				height: 160px;

				border-radius: 12px;
			}
			
			> span {
				width: 100%;

				display: inline-block;
				
				font-size: 14px;
			}

			> .title {
				font-size: 16px;
				font-weight: bold;
			}

			> .priceLike {
				display: flex;

				padding-top: 6px;
				
				> span {
					display: flex;
					
					> img {
						width: 13px;

						margin-right: 2px;
					}
				}

				> .price {				
					width: 100%;
									
					font-size: 15px;
					font-weight: bold;
				}
			}
		}
	}

	> .articles:nth-child(3n) {
		margin-right: 0px;
	}
}

</style>

<script lang="ts">
import { Product, QueryID } from '@/structure/types';
import { Component, Vue } from 'vue-property-decorator';
import { cutName, priceType } from '@/utils/format';
import ContentsJsonFile from '@/assets/contents.json'

@Component
export default class SearchHotArticles extends Vue {
	products: Product[] = ContentsJsonFile.products as any
	imageIndex: number = 0

	isHotArticlesExists(): boolean {
		return this.products != null
	}

	updateQueryID(item: Product): QueryID {
		return {name: 'articles', query: {id : item.id}}
	}

	getName(item: Product): string {
		return cutName(item.name, 15)
	}

	getPrice(item: Product): string {
		return priceType(item)
	}
}
</script>
