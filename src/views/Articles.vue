<template>
	<div :class="$style.index">
		<div :class="[$style.container, 'general-font-color-basic']">
			<div :class="$style.hiddenPage" v-if="hiddenCheck()">
				<span>숨겨져 있는 게시글은 볼 수 없습니당 :(</span>
			</div>
			<div :class="$style.nonHiddenPage" v-else-if="selectedException()">
				<div :class="$style.articleImage">
					<button class="general-background-color-light" v-on:click="minusImageIndex">
						<img :src="require('@/assets/chvron_left.svg')">
					</button>
					<div :class="$style.infoImage" v-if="imagesException()">
						<img :src="selectedProduct.images[imageIndex]" v-on:click="imageView()">
						<div :class="$style.infoImageBtn" v-if="maxImageIndex > 1">
							<span :class="$style.btnSpan" v-for="(item, index) in maxImageIndex" :key="index">
								<button :class="$style.imageBtn" v-if="index == imageIndex" v-on:click="btnImageIndex(index)"></button>
								<button v-else v-on:click="btnImageIndex(index)"></button>
							</span>
						</div>
					</div>
					<button class="general-background-color-light" v-on:click="plusImageIndex">
						<img :src="require('@/assets/chvron_right.svg')">
					</button>
				</div>
				
				<div :class="[$style.userInfo, 'general-border-bottom-color']" v-if="registeredByException()">
					<div :class="$style.contents">
						<div :class="$style.user">
							<img :src="thumbnailException()">
							<div :class="$style.info">
								<span :class="$style.userName">{{ selectedProduct.registered_by.name }}</span>
								<span :class="$style.userLocation">{{selectedProduct.registered_by.location }}</span>
							</div>
						</div>

						<div :class="$style.mannerInfo">
							<div :class="$style.mannerTemparature">
								<div :class="[$style.manner, 'change-font-color-temperature-' + tempIndex]">
									<span>{{ selectedProduct.registered_by.temperature }}°C</span>
									<div :class="[$style.grayBar, 'change-bar-color-temparature-0']">
										<div :class="[$style.changeBar,'change-bar-color-temperature-' + tempIndex]"></div>
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
					<span :class="$style.title">{{ selectedProduct.name }}</span>
					<span class="general-font-color-basic-2" v-if="categoryAndDateExcetion()">{{ selectedProduct.category }} ∙ {{ timeForToday(selectedProduct.registered_date) }}</span>
					<span class="general-font-color-basic-2" v-else>알 수 없음</span>
					<span :class="$style.price">{{ priceType(selectedProduct.price) }}원</span>
					<span :class="$style.info">{{ selectedProduct.description }}</span>
					<span class="general-font-color-basic-2">관심 {{ selectedProduct.likes }} ∙ 채팅 {{ selectedProduct.chats }} ∙ 조회 {{ selectedProduct.views }}</span>
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
						<div :class="[$style.articles, lrCheck(index)]" v-for="(item, index) in duplicatedProducts.slice(0, 6)" :key="index">
							<div class="general-font-color-basic" v-on:click="updateUrlQuery(item.id)">
								<img :src="item.images[0]">
								<span :class="$style.title" v-if="item.name.length >= 15">{{ cuttingName(item.name) }}</span>
								<span :class="$style.title" v-else>{{ item.name }}</span>
								<span :class="$style.price">{{ priceType(item.price) }}원</span>
								<span>{{ item.registered_by.location }}</span>
								<span class="general-font-color-basic-2">관심 {{ item.likes }} ∙ 채팅 {{ item.chats }}</span>
							</div>
						</div>
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

					> img {
						width: 677px;
						height: 500px;

						border-radius: 10px;

						object-fit: cover;

						cursor: pointer;
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

									> .changeBar {
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

					> .articles {
						width: calc(33% - 16px);
						
						margin-right: 27px;
						margin-bottom: 56px;

						> div {
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

					> .articles.right {
						margin-right: 0px;
					}
				}
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
		
	},
})
export default class Articles extends Vue {
	products: any = ContentsJsonFile.products
	duplicatedProducts: any = []
	selectedProduct: any = {}
	articleID: any = this.$route.query.id
	imageIndex: number = 0
	maxImageIndex: number = 0
	tempIndex: string = '1'
	

	mounted() {
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

		this.maxImageIndex = this.selectedProduct.images.length
	}

	hiddenCheck() {
		if (this.selectedProduct.is_hidden == null) {
			return false
		}
		return true
	}

	selectedException() {
		if (this.selectedProduct == null) {
			return false
		}

		return true
	}

	imagesException() {
		if(this.selectedProduct.images && this.selectedProduct.images.length > 0) {
			return true
        }	

		return false
	}

	thumbnailException() {
		if (!this.selectedProduct.registered_by) {
			return
		}
		
		if (this.selectedProduct.registered_by.thumbnail == null) {
			return require('@/assets/default.png')
		}

		return this.selectedProduct.registered_by.thumbnail
	}

	registeredByException() {
		if (!this.selectedProduct.registered_by) {
			return false
		}

		var registered = this.selectedProduct.registered_by

		if (!registered.name || !registered.temperature || !registered.location) {
			return false
		}

		return true
	}

	categoryAndDateExcetion() {
		if (this.selectedProduct.category && this.selectedProduct.registered_date) {
			return true
		}

		return false
	}

	minusImageIndex() {
		if (this.imageIndex == 0) {
			this.imageIndex = this.selectedProduct[0]?.images.length - 1
		} else {
			this.imageIndex -= 1
		}
	}

	plusImageIndex() {
		if (this.imageIndex == this.selectedProduct[0]?.images.length - 1) {
			this.imageIndex = 0
		} else {
			this.imageIndex += 1
		}
	}

	btnImageIndex(index: number) {
		this.imageIndex = index
	}

	updateUrlQuery(item: any) {
		this.$router.push({query: {id: item}})
		window.location.reload()
		this.scrollToTop()
	}

	scrollToTop() {
		window.scrollTo({
			top: 0
		})
	}
   

	temperatureFace() {
		var temperature = this.selectedProduct.registered_by.temperature

		switch(true) {
			case (temperature <= 10):
				this.tempIndex = '1'
				break
			case (10 < temperature) && (temperature <=  20):
				this.tempIndex = '2'
				break
			case (20 < temperature) && (temperature <=  37):
				this.tempIndex = '3'
				break
			case (37 < temperature) && (temperature <=  45):
				this.tempIndex = '4'
				break
			case (45 < temperature) && (temperature <=  60):
				this.tempIndex = '5'
				break
			case (60 < temperature):
				this.tempIndex = '6'
				break
		}
	}

	lrCheck(index: number) {
		if (((index + 1) % 3) == 0) {
			// @ts-ignore
			return this.$style.right
		}

		return
	}

	cuttingName(name: string): string {
		return name.substring(0,16) + '...'
	}

	priceType(price: number): string {
		if (!this.selectedProduct.price) {
			return "알 수 없음"
		}

		var priceComma = String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		return priceComma
	}

	timeForToday(registered_date: number) {
		var today = new Date();
        var timeValue = new Date(registered_date * 1000);

        var betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);

        if (betweenTime < 1) {
			return '방금 전';
		} else if (betweenTime < 60) {
            return betweenTime + '분 전'
		}

        var betweenTimeHour = Math.floor(betweenTime / 60);
        
		if (betweenTimeHour < 24) {
            return betweenTimeHour + '시간 전'
        }

        var betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        
		if (betweenTimeDay < 365) {
            return betweenTimeDay + '일 전'
        }

        return Math.floor(betweenTimeDay / 365) + '년 전'
	}

	imageView() {
		this.scrollToTop()
		return	this.$router.push({name: 'imageview', query: {id : this.selectedProduct.id, address : this.selectedProduct.images[this.imageIndex]}});
	}
}
</script>
