<template>
	<div :class="$style.index" v-if="isHotArticlesExists()">
		<div :class="[$style.articles, 'general-border-bottom-color']" v-for="(item, index) in products.slice(0, 6)" :key="index">
			<router-link class="general-font-color-basic" :to="updateQueryID(item)">								
				<img :src="item.images[imageIndex]">
				<div :class="$style.mobileFlex">
					<span :class="$style.title">{{ getName(item) }}</span>
					<span class="general-font-color-search">{{ item.registered_by.location }}</span>
					<span :class="[$style.priceLike, 'general-font-color-emphasize']">
						<span :class="$style.price">{{ getPrice(item) }}원</span>
						<span class="general-font-color-basic">
							<img :src="require('@/assets/heart_small.svg')">{{ item.likes }}
						</span>
					</span>
				</div>
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

	@include mobile {
		display: block;
	}

	> .articles {
		width: 217px;

		margin-right: 34px;

		margin-bottom: 56px;

		@include mobile {
			width: auto;

			margin: 0px 16px;
			padding: 16px 0px;

			border-bottom-width: 1px;
			border-bottom-style: solid;
		}

		> a {
			display: block;

			text-decoration: none;

			cursor: pointer;

			@include mobile {
				display: flex;
			}
			
			> img {
				width: 100%;
				height: 160px;

				border-radius: 12px;

				@include mobile {
					width: 110px;
					height: 110px;
				}
			}

			> .mobileFlex {
				display: block;

				@include mobile {
					padding-left: 16px;
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

					@include mobile {
						float: right;
					}
					
					> span {
						display: flex;
						
						@include mobile {
							position: absolute;
							right: 45px;

							padding-top: 40px;
						}
						
						> img {
							width: 13px;

							margin-right: 2px;
						}
					}

					> .price {				
						width: 100%;
										
						font-size: 15px;
						font-weight: bold;

						@include mobile {
							display: none;
						}
					}
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
import { RawLocation } from 'vue-router';
import ContentsJsonFile from '@/assets/json/contents.json'

@Component
export default class SearchHotArticles extends Vue {
	products: Product[] = ContentsJsonFile.products as Product[]
	imageIndex: number = 0

	isHotArticlesExists(): boolean {
		return this.products != null
	}

	updateQueryID(item: Product): RawLocation {
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
