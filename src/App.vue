<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="$style.headContainer">
				<div :class="$style.header">
					<div :class="$style.logo">
						<router-link to="/">
							<img :src="require('@/assets/logo.svg')">
						</router-link>
					</div>
					<div :class="$style.link" v-for="(item, index) in linkAddress" :key="index">
						<router-link :to="('/' + item.address)">
							<span>{{ item.name }}</span>
						</router-link>
					</div>
					<div :class="$style.rightHeader">
						<div :class="$style.search">
							<input v-on:keydown="keydownHandler" :class="[$style.searchInput, 'background-color-black-white']" type="text" placeholder="물품이나 동네를 검색해보세요" v-model="searchID">
						</div>
						<div :class="$style.chat">
							<button :class="$style.chatBtn">채팅하기</button>
						</div>
					</div>
				</div>
			</div>
			<div :class="$style.mainContainer">
				<router-view/>
			</div>
			<div :class="[$style.footerContainer, 'border-top-color']">
				<div :class="$style.footer">
					<div :class="[$style.linkFooter, 'general-font-color-black-white']">
						<div :class="$style.leftLinkFooter">
							<div :class="$style.linkList">
								<div :class="$style.list" v-for="(item, index) in linkFooter" :key="index">
									<div :class="$style.routerList">
										<router-link class="general-font-color-black-white" :to="'/' + item.inPageLink">{{ item.inPage }}</router-link>
									</div>
									<div :class="$style.anchorList">
										<a class="general-font-color-black-white" :href="item.outPageLink" target="_blank">{{ item.outPage }}</a>
									</div>
									<div :class="$style.anchorList">
										<a class="general-font-color-black-white" :href="item.managePageLink" target="_blank">{{ item.managePage }}</a>
									</div>
								</div>
							</div>
						</div>
						<div :class="$style.rightLinkFooter">
							<span>당근마켓 앱 다운로드</span>
							<div :class="$style.downloadBtn">
								<div :class="downloadClass(item.style)" v-for="(item, index) in downloadFooter" :key="index">
									<a :href="item.downloadLink" target="_blank">
										<img :src="require('@/assets/button_' + item.downloadImage)">
									</a>
								</div>
							</div>
						</div>
					</div>
					<div :class="[$style.infoFooter, 'footer-font-color-gray-8b94', 'border-top-color']">
						<div :class="$style.leftInfoFooter">
							<div :class="$style.infoDiv">
								<span v-for="(item, index) in infoFooter" :key="index">
									<span :class="$style.footerBoldSpan">{{ item.bold }}</span>
									<span> {{ item.regular }}</span>
									<span :class="$style.footerLineSpan" v-if="(index == 0 || index == 4)">|</span>
									<span v-else><br></span>
								</span>
							</div>
							<div :class="$style.inquiryDiv">
								<span :class="$style.inquirySpan" v-for="(item, index) in inquiryFoorer" :key="index">
									<router-link :class="[$style.inquiryAnchor, 'footer-font-color-gray-8b94']" :to="'/'">
										{{ item.inquiry }}
									</router-link>
								</span>
							</div>
							<div :class="$style.readDiv">
								<a :href="item.address" :class="[$style.readAnchor, 'footer-font-color-gray-8b94']" target="_blank" v-for="(item, index) in readFooter" :key="index">
									<span class="footer-font-color-gray-5159" v-if="index == 1">{{ item.info }}</span>
									<span v-else>{{ item.info }}</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import '@/assets/theme.scss';

* {
	padding: 0;
	margin: 0;

	box-sizing: border-box;

	font-family: 'Noto Sans KR', sans-serif;
}
</style>

<style lang="scss" module>
@import '@/assets/utils.scss';

.index {

	> .container {
		> .headContainer {			
			height: 64px;

			display: fixed;
			top: 0;

			> .header {
				width: 1200px;
				height: 100%;

				display: flex;
				align-items: center;

				margin: 0 auto;
				padding: 12px 16px;

				> .logo {
					padding-right: 40px;
				}

				> .link {
					padding-right: 30px;

					transform: translateY(-3px);

					> a {
						text-decoration: none;

						font-size: 18px;
						font-weight: bold;

						> span {
							color: #4d5159;
						}
					}

					:global {
						.router-link-exact-active {
							> span {
								color: #ff6f0f;
							}
						}				
					}

					@include mobile {
						display: none;
					}
				}

				> .rightHeader {
					display: flex;
					position: fixed;
					top: 12px;
					right: 16px;

					
					> .search {
						padding-right: 12px;

						> .searchInput {
							width: 288px;
							height: 40px;

							font-size: 16px;
							
							padding: 9px 12px;

							border: 0px;
							border-radius: 3px;

							@include semiMobile {
								display: none;
							}
						}
					}

					> .chat {

						> .chatBtn {
							width: 86px;
							height: 40px;

							font-size: 16px;

							padding: 5px;

							border-radius: 3px;
						}

						@include mobile {
							display: none;
						}
					}
					
				}
			}
		}

		> .footerContainer {
			border-top: 1px solid;

			> .footer {
				width: 768px;

				margin: 0 auto;

				> .linkFooter {
					display: flex;


					font-size: 14px;
					
					padding-top: 48px;
					padding-bottom: 48px;

					> .leftLinkFooter {						
						padding-right: 70px;

						> .linkList {
							width: 400px;
							height: 150px;

							> .list {
								height: calc(100% / 3);

								display: flex;

								> div {
									width: calc(100% / 3);
									
									display: flex;

									align-items: center;

									> a {
										text-decoration: none;
									}

									> a:hover {
										text-decoration: underline;
									}
								
								}
							}
						}
					}

					> .rightLinkFooter {
						> span {
							display: inline-block;

							
							font-weight: bold;

							padding-bottom: 5px;
						}

						> .downloadBtn {
							display: flex;

							> .download {
								margin-left: 10px;
							}
						}	
					}
				}

				> .infoFooter {
					padding-top: 24px;
					padding-bottom: 100px;

					font-size: 13px;

					border-top: 1px solid;

					> .leftInfoFooter {

						> .infoDiv {
							padding-bottom: 16px;

							> span {
								> .footerBoldSpan {
									font-weight: bold;
								}
	
								> .footerLineSpan {
									padding: 4px;

									font-size: 10px;

									transform: translateY(10px);
								}
							}
						}

						> .inquiryDiv {
							padding-bottom: 16px;


							> .inquirySpan {
								margin-right: 16px;
								
								> .inquiryAnchor {
									text-decoration: none;

									font-weight: bold;
								}

								> .inquiryAnchor:hover {
									text-decoration: underline;
								}
							}
						}

						> .readDiv {
							
							> .readAnchor {
								margin-right: 16px;

								font-weight: bold;

								text-decoration: none;
							}

							> .readAnchor:hover {
								text-decoration: underline;
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
import { Component, Vue, Watch } from 'vue-property-decorator'
import ContentsJsonFile from '@/assets/contents.json'
import LinkFooterJsonFile from '@/assets/linkFooter.json'
import LinkJsonFile from '@/assets/link.json'
import InfoFooterJsonFile from '@/assets/infoFooter.json'

@Component({
	components: {
		// HelloWorld,
	},
})
export default class HomeView extends Vue {
	mode: string = this.$store.getters.getMode
	sales: any = ContentsJsonFile.products
	linkAddress: any = LinkJsonFile.link
	linkFooter: any = LinkFooterJsonFile.link
	downloadFooter: any = LinkFooterJsonFile.download
	infoFooter: any = InfoFooterJsonFile.info
	inquiryFoorer: any = InfoFooterJsonFile.inquiry
	readFooter: any = InfoFooterJsonFile.read

	searchID?: string

	mounted() {
		this.$store.commit('setSales', this.sales)
	}

	@Watch('$store.state.mode')
	modeChange() {
		this.mode = this.$store.getters.getMode

		switch(this.mode) {
			case 'light':
				document.body.classList.remove('dark')
				document.body.classList.add('light')
				break
			case 'dark':
				document.body.classList.remove('light')
				document.body.classList.add('dark')
				break
		}
	}

	downloadClass(style: string) {
		if (style == "marginLeft") {
			// @ts-ignore
			return this.$style.download
		} else {
			return ''
		}
	}

	keydownHandler(e: KeyboardEvent) {
		if (e.key == "Enter") {
		}
	}

}
</script>
 