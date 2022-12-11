<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="[$style.headContainer, 'change-background-color-basic']">
				<div :class="$style.header">
					<div :class="$style.leftHeader">
						<div :class="$style.logo">
							<router-link to="/">
								<img :src="require('@/assets/logo.svg')">
							</router-link>
						</div>
						<div :class="$style.link" v-for="(item, index) in linkAddress" :key="index">
							<router-link :to="('/' + item.address)">
								<span class="change-font-color-footer">{{ item.name }}</span>
							</router-link>
						</div>
					</div>
						<div :class="$style.rightHeader">
						<div :class="$style.search">
							<input v-on:keydown="keydownHandler" :class="[$style.searchInput, 'change-font-color-basic', 'change-background-color-search']" type="text" placeholder="물품이나 동네를 검색해보세요" v-model="searchQuery">
						</div>
						<div :class="$style.chat">
							<button :class="[$style.chatBtn, 'change-font-color-basic', 'change-background-color-basic', 'change-border-color']">채팅하기</button>
						</div>
					</div>
				</div>
			</div>
			<div :class="$style.mainContainer">
				<router-view />
			</div>
			<div :class="[$style.footerContainer, 'change-border-top-color']">
				<div :class="$style.footer">
					<div :class="[$style.linkFooter, 'change-font-color-link']">
						<div :class="$style.leftLinkFooter">
							<div :class="$style.linkList">
								<div :class="$style.list" v-for="(item, index) in linkFooter" :key="index">
									<div :class="$style.routerList">
										<router-link class="change-font-color-link" :to="'/' + item.inPageLink">{{ item.inPage }}</router-link>
									</div>
									<div :class="$style.anchorList">
										<a class="change-font-color-link" :href="item.outPageLink" target="_blank">{{ item.outPage }}</a>
									</div>
									<div :class="$style.anchorList">
										<a class="change-font-color-link" :href="item.managePageLink" target="_blank">{{ item.managePage }}</a>
									</div>
								</div>
							</div>
						</div>
						<div :class="$style.rightLinkFooter">
							<span>당근마켓 앱 다운로드</span>
							<div :class="$style.downloadBtn">
								<div v-for="(item, index) in downloadFooter" :key="index">
									<a :href="item.downloadLink" target="_blank">
										<img :src="require('@/assets/button_' + item.downloadImage)">
									</a>
								</div>
							</div>
						</div>
					</div>
					<div :class="[$style.infoFooter, 'general-font-color-footer', 'change-border-top-color']">
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
									<router-link :class="[$style.inquiryAnchor, 'general-font-color-footer']" :to="'/'">
										{{ item.inquiry }}
									</router-link>
								</span>
							</div>
							<div :class="$style.readDiv">
								<a :href="item.address" :class="[$style.readAnchor, 'general-font-color-footer']" target="_blank" v-for="(item, index) in readFooter" :key="index">
									<span class="change-font-color-footer" v-if="index == 1">{{ item.info }}</span>
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
			width: 100%;	
			height: 64px;

			position: fixed;
			top: 0;
			left: 0;
			z-index: 2;

			> .header {
				width: 1200px;
				height: 100%;

				display: flex;
				align-items: center;

				margin: 0 auto;
				padding: 12px 16px;

				> .leftHeader {
					width: 100%;
					display: flex;

					> .logo {
						padding-right: 40px;
					}

					> .link {
						padding-right: 30px;

						transform: translateY(2px);

						> a {
							text-decoration: none;

							font-size: 18px;
							font-weight: bold;
						}

						:global {
							.router-link-exact-active {

							}
						}
					}				
				}

				> .rightHeader {
					display: flex;
					
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

						
						> .searchInput:focus {
							outline: none;
						}
					}

					> .chat {

						> .chatBtn {
							width: 86px;
							height: 40px;

							font-size: 16px;
							font-weight: bold;

							padding: 5px;

							border-radius: 3px;		
							border-width: 1px;
							border-style: solid;					
						}
					}
				}
			}
		}
		
		> .mainContainer {
			min-width: 1200px;

			padding-top: 64px;

			position: relative;
		}

		> .footerContainer {
			min-width: 1200px;

			border-top-width: 1px;
			border-top-style: solid;

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

							> div:nth-child(2) {
								margin-left: 10px;
							}
						}	
					}
				}

				> .infoFooter {
					padding-top: 24px;
					padding-bottom: 100px;

					font-size: 13px;

					border-top-width: 1px;
					border-top-style: solid;

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
import { linkAddress, link, download, info, inquiry, read } from './structure/types'
import LinkFooterJsonFile from '@/assets/linkFooter.json'
import LinkJsonFile from '@/assets/link.json'
import InfoFooterJsonFile from '@/assets/infoFooter.json'

@Component
export default class App extends Vue {
	searchQuery: string = ""
	mode: string = this.$store.getters.getMode
	linkAddress: linkAddress[] = LinkJsonFile.link as any
	linkFooter: link[] = LinkFooterJsonFile.link as any
	downloadFooter: download[] = LinkFooterJsonFile.download as any
	infoFooter: info[] = InfoFooterJsonFile.info as any
	inquiryFoorer: inquiry[] = InfoFooterJsonFile.inquiry as any
	readFooter: read[] = InfoFooterJsonFile.read as any

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

	@Watch('$route.path')
	updatePath() {
		this.scrollToTop()
	}

	@Watch('$route.query')
	updateQuery() {
		this.scrollToTop()
	} 

	scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	keydownHandler(e: KeyboardEvent) {
		if (e.key == "Enter") {
			this.updateSearchQuery()
			this.searchQuery = ""
		}
	}

	updateSearchQuery() {
		if (this.searchQuery == "") {
			return alert('검색어를 입력하세요.')
		}

		this.$store.commit('setSearchQuery', this.searchQuery)

		this.$router.push({name: 'search', query: {q: this.searchQuery}});
	}
}
</script>
 