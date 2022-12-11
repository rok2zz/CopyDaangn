<template>
	<div :class="$style.index">
		<div :class="[$style.container, 'general-font-color-basic']">
			<div :class="$style.hiddenPage" v-if="isHidden()">
				<span>숨겨져 있는 게시글은 볼 수 없습니당 :(</span>
			</div>
			<div :class="$style.nonHiddenPage" v-else-if="isProductLoaded()">
				<div :class="$style.articleImage">
					<button class="general-background-color-light" v-on:click="updateImageIndex(-1)">
						<img :src="require('@/assets/chvron_left.svg')">
					</button>
					<div :class="$style.infoImage" v-if="isImageLoaded()">
						<router-link :to="{name: 'imageview', query: {id : selectedProduct?.id, address : selectedProduct?.images[imageIndex]}}">
							<img :src="selectedProduct?.images[imageIndex]">
						</router-link>
						<div :class="$style.infoImageBtn" v-if="maxImageIndex > 1">
							<span :class="$style.btnSpan" v-for="(item, index) in maxImageIndex" :key="index">
								<button :class="$style.imageBtn" v-if="index == imageIndex" v-on:click="updateImageBtn(index)"></button>
								<button v-else v-on:click="updateImageBtn(index)"></button>
							</span>
						</div>
					</div>
					<button class="general-background-color-light" v-on:click="updateImageIndex(1)">
						<img :src="require('@/assets/chvron_right.svg')">
					</button>
				</div>
				
				<div :class="[$style.userInfo, 'general-border-bottom-color']" v-if="isRegisteredByExists()">
					<div :class="$style.contents">
						<div :class="$style.user">
							<img :src="getThumbnail()">
							<div :class="$style.info">
								<span :class="$style.userName">{{ selectedProduct?.registered_by.name }}</span>
								<span :class="$style.userLocation">{{selectedProduct?.registered_by.location }}</span>
							</div>
						</div>

						<div :class="$style.mannerInfo">
							<div :class="$style.mannerTemparature">
								<div :class="[$style.manner, 'change-font-color-temperature-' + tempIndex]">
									<span>{{ selectedProduct?.registered_by.temperature }}°C</span>
									<div :class="[$style.grayBar, 'change-bar-color-temparature-0']">
										<div :style="getBarStyle()" :class="'change-bar-color-temperature-' + tempIndex"></div>
									</div>
								</div>
								<div :class="$style.face">
									<img :src="require('@/assets/face_' + tempIndex + '.png')">
								</div>
							</div>
						</div>
					</div>
					<span class="general-font-color-basic-2">매너온도</span>
				</div>

				<div :class="[$style.articleInfo, 'general-border-bottom-color']">
					<span :class="$style.title">{{ selectedProduct?.name }}</span>
					<span class="general-font-color-basic-2" v-if="isCategoryAndDateExists()">{{ selectedProduct?.category }} ∙ {{ getTime(selectedProduct) }}</span>
					<span class="general-font-color-basic-2" v-else>알 수 없음</span>
					<span :class="$style.price">{{ 1 }}원</span>
					<span :class="$style.info">{{ selectedProduct?.description }}</span>
					<span class="general-font-color-basic-2">관심 {{ selectedProduct?.likes }} ∙ 채팅 {{ selectedProduct?.chats }} ∙ 조회 {{ selectedProduct?.views }}</span>
				</div>	
			</div>

			<div :class="$style.hotArticles">
				<div :class="$style.contents">
					<div :class="$style.title">
						<span :class="$style.titleSpan">당근마켓 인기중고</span>
						<span :class="$style.linkSpan">
							<router-link class="general-font-color-emphasize" to="/hot_articles">더 구경하기</router-link>
						</span>
					</div>
					<div :class="$style.list">
						<HotArticlesList :sliceIndex="6" :row="3" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" module>
.index {
	
	> .container {
		> .hiddenPage {
			width: 677px;

			margin: 0 auto;

			text-align: center;		
			
			padding: 120px 5px;
		}

		> .nonHiddenPage {

			> .articleImage {
				width: 730px;
				
				display: flex;
				align-items: center;
				text-align: center;

				margin: 0 auto;
				padding-top: 40px;

				> button {
					padding: 0px 10px;

					border: none;

					cursor: pointer;
				}

				> .infoImage {
					width: 100%;

					position: relative;

					> a {

						> img {
							width: 677px;
							height: 500px;

							border-radius: 10px;

							object-fit: cover;

							cursor: pointer;
						}
					}

					> .infoImageBtn {
						width: 100%;

						position: absolute;
						bottom: 16px;
						
						text-align: center;

						button {
							width: 8px;
							height: 8px;

							border: none;
							border-radius: 50%;

							opacity: 0.5;

							cursor: pointer;
						}

						> span {
							margin: 0px 4px;

							> .imageBtn {
								opacity: 1;
							}
						}
					}
				}
			}

			> .userInfo {
				width: 677px;


				margin: 0 auto;
				margin-top: 25px;
				padding-bottom: 10px;

				border-bottom-width: 1px;
				border-bottom-style: solid;

				> .contents {
					display: flex;

					> .user {
						width: 100%;

						display: flex;

						> img {
							width: 40px;
							height: 40px;

							border-radius: 50%;
						}

						> .info {	
							padding-left: 8px;

							line-height: 1.2;
							
							> span {
								width: 100%;

								display: inline-block;

								font-size: 13px;
							}

							> .userName {
								font-size: 15px;
								font-weight: bold;
							}
						}
					}
				
					> .mannerInfo {
						width: 50%;

						text-align: right;

						> .mannerTemparature {

							display: flex;

							justify-content: flex-end;

							> .manner {
								font-size: 16px;
								font-weight: bold;

								> .grayBar {
									width: 100px;
									height: 4px;

									margin-top: 5px;

									> div {
										height: 4px;
									}
								}
							}

							> .face {

								> img {
									width: 24px;
									
									object-fit: contain;

									transform: translateY(4px);
								}
		
								
								padding-left: 10px;
							}
						}
					}
				}

				> span {
					width: 100%;

					text-align: right;
					display: inline-block;

					font-size: 12px;
				}

			}

			> .articleInfo {
				width: 677px; 

				margin: 0 auto;
				padding: 22px 0px;

				white-space: pre-wrap;

				border-bottom-width: 1px;
				border-bottom-style: solid;

				> span {
					width: 100%;

					display: inline-block;
					
					font-size: 13px;

					padding-bottom: 4px;
				}

				> .title {
					font-size: 20px;
					font-weight: bold;
				}

				> .price {
					font-size: 18px;
					font-weight: bold;
				}

				> .info {
					font-size: 17px;

					padding: 16px 0px;
				}
			}
		}

		> .hotArticles {
			> .contents {
				width: 677px;

				margin: 0 auto;
				padding-top: 22px;

				> .title {
					width: 100%;

					text-align: left;

					padding-bottom: 22px;

					> span {
						display: inline-block;
					}

					> .titleSpan {
						width: 50%;

						font-size: 18px;
						font-weight: bold;
					}

					> .linkSpan {
						width: 50%;
						text-align: right;

						> a {
							font-size: 15px;

							text-decoration: none;
						}

						> a:hover {
							font-weight: bold;
						}
					}
				}

				> .list {
					width: 100%;

					display: flex;
					flex-wrap: wrap;
				}
			}
		}
	}
}

</style>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import ContentsJsonFile from '@/assets/contents.json'
import router from '@/router';
import { cutName, unwrapQuery, timeForToday, priceType } from '@/utils/format';
import { Product, QueryID } from '@/structure/types';
import HotArticlesList from '@/components/HotArticlesList.vue';

@Component({
	components: {
		HotArticlesList
	},
})
export default class Articles extends Vue {
	products: Product[] = ContentsJsonFile.products as any
	duplicatedProducts: Product[] = []
	selectedProduct?: Product = undefined
	articleID?: string = undefined
	imageIndex: number = 0
	maxImageIndex: number = 0
	tempIndex: string = '1'

	mounted() {
		this.init()
	}

	init() {
		this.articleID = unwrapQuery(this.$route.query.id)
		this.copyProducts()
		this.temperatureFace()
	}

	copyProducts() {
		this.duplicatedProducts = this.products.filter((el: { id: any; }) => {
			return !(this.articleID === el.id)
		})

		for (var i = 0; i < this.products.length; i++) {
			if (this.products[i].id == this.articleID) {
				this.selectedProduct = this.products[i]
			}
		}
		if (!this.selectedProduct) return

		this.maxImageIndex = this.selectedProduct.images.length
	}

	isHidden(): boolean {
		if (!this.selectedProduct?.is_hidden) {
			return false
		}

		return this.selectedProduct.is_hidden
	}

	isProductLoaded(): boolean {
		return this.selectedProduct != null
	}

	isImageLoaded(): boolean {
		return this.selectedProduct?.images && this.selectedProduct.images.length > 0 ? true : false
	}

	getThumbnail(): string {
		if (!this.selectedProduct?.registered_by) return require('@/assets/default.png')
	
		return this.selectedProduct.registered_by.thumbnail ?? require('@/assets/default.png')
	}

	isRegisteredByExists(): boolean {
		if (!this.selectedProduct?.registered_by) {
			return false
		}

		var registered = this.selectedProduct.registered_by

		if (!registered.name || !registered.temperature || !registered.location) {
			return false
		}

		return true
	}

	isCategoryAndDateExists(): boolean {
		return this.selectedProduct?.category && this.selectedProduct.registered_date ? true : false
	}

	getBarStyle(): string {
		return 'width:' + this.selectedProduct?.registered_by.temperature + '%;';
	}

	updateImageIndex(isUp: number) {
		this.imageIndex += isUp

		if (this.imageIndex < 0) {
			this.imageIndex = this.maxImageIndex - 1
		} else if (this.imageIndex >= this.maxImageIndex - 1) {
			this.imageIndex = 0
		}
	}

	updateImageBtn(index: number) {
		this.imageIndex = index
	}

	updateImageQuery(product: Product): QueryID {		
		return {name: 'imageview', query: {id : product.id, address : product.images[this.imageIndex]}}
	}

	@Watch('$route.query')
	updateUrlQuery() {
		this.init()
	}

	temperatureFace() {		
		var temperature = this.selectedProduct?.registered_by.temperature

		if (!temperature) return

		if (temperature <= 10) {
			this.tempIndex = '1'
		} else if (10 < temperature && temperature <= 20) {
			this.tempIndex = '2'
		} else if (20 < temperature && temperature <= 37) {
			this.tempIndex = '3'
		} else if (37 < temperature && temperature <= 45) {
			this.tempIndex = '4'
		} else if (45 < temperature && temperature <= 60) {
			this.tempIndex = '5'
		} else if (60 < temperature) {
			this.tempIndex = '6'
		}
	}

	getImages(product: Product): string {
		return product.images[this.imageIndex]
	}

	getName(product: Product): string {
		return product.name
	}

	getCutName(product: Product): string {
		return cutName(product.name, 16)
	}

	getPrice(product: Product): string {
		return priceType(product)
	}

	getTime(product: Product): string | undefined {
		return timeForToday(product?.registered_date)
	}

}
</script>
