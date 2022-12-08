<template>
	<div :class="$style.index">
		<div :class="[$style.container, 'general-font-color-basic']">
			<div :class="$style.hiddenPage" v-if="hiddenCheck()">
				<span>숨겨져 있는 게시글은 볼 수 없습니당 :(</span>
			</div>
			<div :class="$style.nonHiddenPage" v-else>
				<div :class="$style.articleImageContainer">
					<button class="background-color-black-white-basic" v-if="checkImageIndex()" v-on:click="minusImageIndex">
						<img :src="require('@/assets/chvron_left.svg')">
					</button>
					<div :class="$style.articleInfoImage">
						<img :src="checkSelectedImageIndex()" v-on:click="imageView(checkSelected().id, checkSelectedImage())">
						<div :class="$style.imageBtnContainer" v-if="checkSelectedImage()?.length > 1">
							<span :class="$style.btnSpan" v-for="(item, index) in checkSelectedImage().length" :key="index">
								<button :class="$style.imageBtn" v-if="index == imageIndex" v-on:click="btnImageIndex(index)"></button>
								<button v-else v-on:click="btnImageIndex(index)"></button>
							</span>
						</div>
					</div>
					<button class="background-color-black-white-basic" v-if="checkImageIndex()" v-on:click="plusImageIndex">
						<img :src="require('@/assets/chvron_right.svg')">
					</button>
				</div>
				<div :class="$style.userInfoContainer">
					<div :class="$style.infoContainer">
						<img :src="checkSelectedThumbnail()">
						<div :class="$style.userInfo">
							<span :class="$style.userName">{{ checkSelected()?.registered_by?.name }}</span>
							<span :class="$style.userLocation">{{ checkSelected()?.registered_by?.location }}</span>
						</div>
					</div>
					<div :class="$style.mannerContainer">
						<div :class="$style.mannerTemparature">
							<div :class="[$style.manner, 'change-font-color-temperature-' + tempIndex]">
								<span>{{ checkSelected()?.registered_by?.temperature }}°C</span>
								<div :class="[$style.grayBar, 'background-color-gray-ecef']">
									<div :class="[$style.changeBar, setBar(),'change-bar-color-temperature-' + tempIndex]"></div>
								</div>
							</div>
							<div :class="$style.mannerFace">
								<img :src="require('@/assets/face_' + tempIndex + '.png')">
							</div>
						</div>
						<span class="general-font-color-gray-8e96">매너온도</span>
					</div>
				</div>
				<div :class="[$style.articleInfoContainer, 'general-border-bottom-color']">
					<span :class="$style.articleTitle">{{ checkSelected()?.name }}</span>
					<span class="general-font-color-gray-8e96">{{ checkSelected()?.category }} ∙ {{ timeForToday(checkSelected()?.registered_date) }}</span>
					<span :class="$style.articlePrice">{{ priceType(checkSelected()?.price) }}원</span>
					<span :class="$style.articleInfo">{{ checkSelected()?.description }}</span>
					<span class="general-font-color-gray-8e96">관심 {{ checkSelected()?.likes }} ∙ 채팅 {{ checkSelected()?.chats }} ∙ 조회 {{ checkSelected()?.views }}</span>
				</div>	
			</div>

			<div :class="$style.hotArticles">
				<div :class="$style.contents">
					<div :class="$style.title">
						<span :class="$style.titleSpan">당근마켓 인기중고</span>
						<span :class="$style.linkSpan">
							<router-link class="general-font-color-carrot" to="/hot_articles">더 구경하기</router-link>
						</span>
					</div>
					<div :class="$style.list">
						<div :class="$style.articles" v-for="(item, index) in duplicatedProducts.slice(0, 6)" :key="index">
							<div class="general-font-color-basic" v-on:click="updateUrlQuery(item.id)">
								<img :src="item.images[0]">
								<span :class="$style.title" v-if="item.name.length >= 15">{{ cuttingName(item.name) }}</span>
								<span :class="$style.title" v-else>{{ item.name }}</span>
								<span :class="$style.price">{{ priceType(item.price) }}원</span>
								<span>{{ item.registered_by.location }}</span>
								<span class="general-font-color-gray-8e96">관심 {{ item.likes }} ∙ 채팅 {{ item.chats }}</span>
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

			> .articleImageContainer {
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

				> .articleInfoImage {
					width: 100%;

					position: relative;

					> img {
						width: 677px;
						height: 500px;

						border-radius: 10px;

						object-fit: cover;

						cursor: pointer;
					}

					> .imageBtnContainer {
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

			> .userInfoContainer {
				width: 677px;

				display: flex;

				margin: 0 auto;
				margin-top: 25px;
				padding-bottom: 10px;

				> .infoContainer {
					width: 50%;

					display: flex;

					> img {
						width: 40px;
						height: 40px;

						border-radius: 50%;
					}

					> .userInfo {	
						padding-left: 10px;
						
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
				
				> .mannerContainer {
					width: 50%;

					margin-left: auto;
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

						> .mannerFace {

							> img {
								width: 30px;
								height: 30px;	
							}
	
							
							padding-left: 10px;
						}
					}
						
					> span {
						font-size: 12px;
					}
				}
			}

			> .articleInfoContainer {
				width: 677px; 

				margin: 0 auto;
				padding: 32px 0px;

				white-space: pre-wrap;

				> span {
					width: 100%;

					display: inline-block;
					
					font-size: 13px;

					padding-bottom: 4px;
				}

				> .articleTitle {
					font-size: 20px;
					font-weight: bold;
				}

				> .articlePrice {
					font-size: 18px;
					font-weight: bold;
				}

				> .articleInfo {
					font-size: 17px;

					padding: 16px 0px;
				}
			}
		}

		> .hotArticles {
			> .contents {
				width: 677px;

				margin: 0 auto;
				padding-top: 32px;

				> .title {
					width: 100%;

					text-align: left;

					padding-bottom: 32px;

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
						width: calc(100% / 3);
						
						display: flex;

						margin-bottom: 56px;

						> div {
							display: block;

							cursor: pointer;
							
							> img {
								width: 208px;
								height: 208px;

								margin-bottom: 10px;

								border-radius: 10px;
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
	selectedProduct: any = []
	articleID: any = this.$route.query.id
	imageIndex: number = 0
	tempIndex: string = '1'
	

	mounted() {
		this.copyProducts()
		this.temperatureFace()
	}

	copyProducts() {
		this.duplicatedProducts = this.products.filter((el: { id: any; }) => {
			return !(this.articleID === el.id)
		})

		this.selectedProduct = this.products.filter((el: { id: any; }) => {
			return this.articleID === el.id
		})
	}

	hiddenCheck() {
		if (this.selectedProduct[0]?.is_hidden) {
			if (this.selectedProduct[0].is_hidden == !null) {
				return true
			}
		}
		return false
		// return this.checkSelected.hasOwnProperty("is_hidden")
	}

	checkImageIndex() {
		if (this.selectedProduct[0]?.images.length <= 1) {
			return false
		}
		return true
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

	checkSelected() {
		if (this.selectedProduct[0] == null) {
			return
		}

		return this.selectedProduct[0]
	}

	checkSelectedRegister() {

	}
   
	checkSelectedThumbnail() {
		if (this.selectedProduct[0]?.registered_by.thumbnail == null) {
			return require('@/assets/default.png')
		}

		return this.selectedProduct[0]?.registered_by.thumbnail
	}

	checkSelectedImageIndex() {
		return this.selectedProduct[0]?.images[this.imageIndex]
	}

	checkSelectedImage() {
		return this.selectedProduct[0]?.images
	}

	setBar() {
		switch(this.tempIndex) {
			case '1':
				// @ts-ignore
				return this.$style.barWidth1
				break
			case '2':
				// @ts-ignore
				return this.$style.barWidth2
				break
			case '3':
				// @ts-ignore
				return this.$style.barWidth3
				break
			case '4':
				// @ts-ignore
				return this.$style.barWidth4
				break
			case '5':
				// @ts-ignore
				return this.$style.barWidth5
				break
			case '6':
				// @ts-ignore
				return this.$style.barWidth6
				break
		}
		
	}

	temperatureFace() {
		var temperature = this.selectedProduct[0]?.registered_by.temperature

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

	cuttingName(name: string): string {
		return name.substring(0,16) + '...'
	}

	priceType(price: number): string {
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

	imageView(id: any, address: any) {
		this.scrollToTop()
		return	this.$router.push({name: 'imageview', query: {id : id, address : address}});
	}
}
</script>
