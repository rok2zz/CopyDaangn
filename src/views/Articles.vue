<template>
	<div :class="$style.index">
		<div :class="[$style.container, 'general-font-color-basic']">
			<div v-if="isHidden()" :class="$style.hiddenPage">
				<span>숨겨져 있는 게시글은 볼 수 없습니당 :(</span>
			</div>

			<div v-else-if="isProductLoaded()" :class="$style.nonHiddenPage">
				<!-- 메인 이미지 -->
				<div :class="$style.articleImage">
					<button v-if="maxImageIndex != 1" class="general-background-color-light" v-on:click="updateImageIndex(-1)">
						<img :src="require('@/assets/images/chvron_left.svg')">
					</button>
					<div v-if="isImageLoaded()" :class="$style.infoImage">
						<img :src="getSelectedProduct().images[imageIndex]" v-on:click="updateShowImage">
						<div v-if="maxImageIndex > 1" :class="$style.infoImageBtn">
							<span v-for="(item, index) in maxImageIndex" :key="index" :class="$style.btnSpan">
								<button v-if="index == imageIndex" :class="$style.imageBtn" v-on:click="updateImageBtn(index)"></button>
								<button v-else v-on:click="updateImageBtn(index)"></button>
							</span>
						</div>
					</div>
					<button v-if="maxImageIndex != 1" class="general-background-color-light" v-on:click="updateImageIndex(1)">
						<img :src="require('@/assets/images/chvron_right.svg')">
					</button>
				</div>

				<!-- 유저 정보 -->
				<div :class="[$style.userInfo, 'general-border-bottom-color']" v-if="isRegisteredByExists()">
					<div :class="$style.contents">
						<div :class="$style.user">
							<img :src="getThumbnail()">
							<div :class="$style.info">
								<span :class="$style.userName">{{ getRegisteredBy().name }}</span>
								<span :class="$style.userLocation">{{ getRegisteredBy().location }}</span>
							</div>
						</div>

						<div :class="$style.mannerInfo">
							<div :class="$style.mannerTemparature">
								<div :class="[$style.manner, 'change-font-color-temperature-' + tempIndex]">
									<span>{{ getRegisteredBy().temperature }}°C</span>
									<div :class="[$style.grayBar, 'change-bar-color-temparature-0']">
										<div :style="getBarStyle()" :class="'change-bar-color-temperature-' + tempIndex"></div>
									</div>
								</div>
								<div :class="$style.face">
									<img :src="require('@/assets/images/face_' + tempIndex + '.png')">
								</div>
							</div>
						</div>
					</div>
					<span class="general-font-color-basic-2">매너온도</span>
				</div>

				<!-- 물품 정보 -->
				<div :class="[$style.articleInfo, 'general-border-bottom-color']">
					<span :class="$style.title">{{ getSelectedProduct().name }}</span>
					<span class="general-font-color-basic-2" v-if="isCategoryAndDateExists()">{{ getSelectedProduct().category }} ∙ {{ getTime(getSelectedProduct()) }}</span>
					<span class="general-font-color-basic-2" v-else>알 수 없음</span>
					<span :class="$style.price">{{ getPrice(getSelectedProduct()) }}원</span>
					<span :class="$style.info">{{ getSelectedProduct().description }}</span>
					<span class="general-font-color-basic-2">관심 {{ getSelectedProduct().likes }} ∙ 채팅 {{ getSelectedProduct().chats }} ∙ 조회 {{ getSelectedProduct().views }}</span>
					
					<!-- 모바일 채팅 -->
					<div :class="$style.mobile">
						<button class="general-border-color-chat general-font-color-emphasize general-background-color-light">판매자와 채팅하기</button>
					</div>
				</div>	
			</div>

			<!-- 이미지 확대 -->
			<div v-if="isShowImage" :class="[$style.imageView, 'general-background-color-imageview']">
				<img :src="getSelectedProduct().images[imageIndex]" :class="$style.image"  v-on:click="updateShowImage">
				<img :class="$style.close" :src="require('@/assets/images/close.svg')" v-on:click="updateShowImage">
			</div>

			<!-- 인기 품목 -->
			<div :class="$style.hotArticles">
				<div :class="$style.contents">
					<div :class="$style.title">
						<span :class="$style.titleSpan">당근마켓 인기중고</span>
						<span :class="$style.linkSpan">
							<router-link class="general-font-color-emphasize" to="/hot_articles">더 구경하기</router-link>
						</span>
					</div>
					<div :class="$style.list">
						<HotArticlesList :maxLength="6" :row="3" :products="duplicatedProducts" />
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
		> .hiddenPage {
			width: 677px;

			margin: 0 auto;

			text-align: center;		
			
			padding: 120px 5px;

			@include mobile {
				width: 100%;
			}
		}

		> .nonHiddenPage {

			> .articleImage {
				width: 730px;
				
				display: flex;
				align-items: center;
				text-align: center;

				margin: 0 auto;
				padding-top: 40px;

				@include mobile {
					width: 100%;

					padding-top: 0px;
				}

				> button {
					padding: 0px 10px;

					border: none;

					cursor: pointer;

					@include mobile {
						display: none;
					}
				}

				> .infoImage {
					width: 100%;

					position: relative;

					> img {
						width: 677px;
						height: 500px;

						border-radius: 10px;
						object-fit: cover;

						cursor: pointer;

						@include mobile {
							aspect-ratio: 1 / 1;
							width: 100%;
							height: initial;

							border-radius: 0px;
						}
					}

					> .infoImageBtn {
						width: 100%;

						position: absolute;
						bottom: 16px;
						
						text-align: center;

						@include mobile {
							display: none;
						}

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
				padding-top: 25px;
				padding-bottom: 10px;

				border-bottom-width: 1px;
				border-bottom-style: solid;

				@include mobile {
					width: calc(100% - 40px);

					margin: 20px;
					padding: 0px;
				}

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

				@include mobile {
					width: calc(100% - 40px);

					margin: 10px 20px;
				}

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

				> .mobile {
					width: 100%;

					display: none;

					margin: 24px 0px;

					@include mobile {
						display: block;
					}

					> button {
						width: 100%;
						height: 50px;

						font-size: 17px;
						font-weight: bold;

						border-radius: 100px;

						cursor: pointer;
					}
				}
			}
		}

		> .imageView {
			width: 100%;
			height: 100%;

			display: flex;
			position: fixed;
			top: 0px;
			left: 0px;
			align-items: center;

			z-index: 3;

			> .image {
				width: 100%;
				height: auto;
				max-width: 850px;

				margin: 0 auto;
			}

			> .close {
				position: absolute;
				top: 20px;
				right: 20px;
				cursor: pointer;
			}
		}

		> .hotArticles {
			> .contents {
				width: 677px;

				margin: 0 auto;
				padding-top: 22px;

				@include mobile {
					width: 100%;
				}

				> .title {
					width: 100%;

					text-align: left;

					padding-bottom: 22px;

					@include mobile {
						width: calc(100% - 40px);

						margin: 10px 20px;
					}

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
import { cutName, unwrapQuery, getRelativeTime, priceType } from '@/utils/format';
import { Product, User } from '@/structure/types';
import { RawLocation } from 'vue-router';
import HotArticlesList from '@/components/HotArticlesList.vue';
import ContentsJsonFile from '@/assets/json/contents.json'

@Component({
	components: {
		HotArticlesList
	},
})
export default class Articles extends Vue {
	products: Product[] = ContentsJsonFile.products as Product[]
	duplicatedProducts: Product[] = []
	selectedProduct?: Product

	articleID?: string
	imageIndex: number = 0
	maxImageIndex: number = 0
	tempIndex: string = '1'
	isShowImage: boolean = false

	mounted() {
		this.init()
	}

	init() {
		this.articleID = unwrapQuery(this.$route.query.id)
		this.copyProducts()
		this.temperatureFace()
		this.imageIndex = 0
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
		return this.selectedProduct?.is_hidden ?? false
	}

	isProductLoaded(): boolean {
		return this.selectedProduct != null
	}
	
	isImageLoaded(): boolean {
		return this.selectedProduct?.images && this.selectedProduct.images.length > 0 ? true : false
	}

	getSelectedProduct(): Product {
		return this.selectedProduct ?? {} as Product
	}

	getRegisteredBy(): User {
		return this.selectedProduct?.registered_by ?? {} as User
	}

	getThumbnail(): string {
		if (!this.selectedProduct?.registered_by) return require('@/assets/images/default.png')
	
		return this.selectedProduct.registered_by.thumbnail ?? require('@/assets/images/default.png')
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
		} else if (this.imageIndex > this.maxImageIndex - 1) {
			this.imageIndex = 0
		}
	}

	updateImageBtn(index: number) {
		this.imageIndex = index
	}

	updateImageQuery(product: Product): RawLocation {		
		return {name: 'imageview', query: {id : product.id, address : product.images[this.imageIndex]}}
	}

	@Watch('$route.query')
	updateUrlQuery() {
		this.init()
	}

	temperatureFace(): void {		
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

	getTime(product: Product): string {
		return getRelativeTime(product.registered_date)
	}

	updateShowImage() {
		this.isShowImage = !this.isShowImage
	}

}
</script>
