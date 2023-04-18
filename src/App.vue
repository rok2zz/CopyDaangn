<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<!-- 헤더 영역 -->
			<div :class="[$style.headContainer, 'change-background-color-basic']">
				<div :class="$style.header">
					<div :class="$style.leftHeader">
						<div :class="$style.logo">
							<router-link to="/">
								<img :src="require('@/assets/logo.svg')">
							</router-link>
						</div>
						<div v-for="(item, index) in linkAddress" :key="index" :class="$style.link">
							<router-link :to="('/' + item.address)">
								<span class="change-font-color-footer">{{ item.name }}</span>
							</router-link>
						</div>
					</div>

					<div :class="$style.rightHeader">
						<div :class="$style.search">
							<div :class="$style.mobileIcon" v-on:click="updateShowSearch">
								<SearchIcon />
							</div>
							<input v-on:keydown="keydownHandler" :class="[$style.searchInput, 'change-font-color-basic', 'change-background-color-search']"
								 type="text" placeholder="물품이나 동네를 검색해보세요" v-model="searchQuery">
						</div>
						<div :class="$style.mobileIcon" v-on:click="updateShowMenu">
							<CloseIcon v-if="isShowMenu" />
							<MenuIcon v-else />
						</div>
						<div :class="$style.chat">
							<button :class="[$style.chatBtn, 'change-font-color-basic', 'change-background-color-basic', 'change-border-color']">채팅하기</button>
						</div>
					</div>
				</div>
			</div>
			
			<!-- 모바일 검색 -->
			<div v-if="isShowSearch" :class="[$style.mobileSearch, 'change-font-color-basic']">
				<div :class="[$style.search, 'change-background-color-basic']">
					<input v-on:keydown="keydownHandler" :class="[$style.searchInput, 'change-font-color-basic', 'change-background-color-search']" 
						type="text" placeholder="물품이나 동네를 검색해보세요" v-model="searchQuery">
					<div :class="$style.handler">
						<button :class="[$style.cancel, 'change-font-color-basic', 'change-background-color-basic']" v-on:click="updateShowSearch">취소</button>
					</div>
				</div>
				<div :class="[$style.recommend, 'change-background-color-basic']" v-on:click="updateShowSearch">
					<span :class="[$style.title, 'general-font-color-footer']">추천</span>
					<div :class="$style.keywords">
						<router-link v-for="(item, index) in keywords.slice(0, 6)" :key="index" 
							:class="[$style.list, 'change-font-color-basic', 'change-border-bottom-color']" :to="getKeywordQuery(item)">
							{{ item.word }}
						</router-link>
					</div>
				</div>
				<div :class="[$style.blackBox, 'general-background-color-dark']" v-on:click="updateShowSearch"></div>
			</div>

			<!-- 모바일 메뉴 -->
			<div v-if="isShowMenu" :class="$style.mobileMenu" v-on:click="updateShowMenu">
				<div :class="[$style.list, 'change-font-color-basic', 'change-background-color-basic']">
					<router-link v-for="(item, index) in linkAddress" :key="index" :class="$style.link" :to="('/' + item.address)">
						<span class="change-font-color-footer">{{ item.name }}</span>
					</router-link>
				</div>
				<div :class="[$style.blackBox, 'general-background-color-dark']"></div>
			</div>

			<!-- 뷰 출력 -->
			<div :class="$style.mainContainer">
				<router-view />
			</div>

			<!-- 푸터 영역 -->
			<div :class="[$style.footerContainer, 'change-border-top-color']">
				<div :class="$style.footer">
					<div :class="[$style.linkFooter, 'change-font-color-link']">
						<div :class="$style.mobileLinkFooter">
							<span>당근마켓 앱 다운로드</span>
							<div v-for="(item, index) in downloadFooter" :key="index">
								<a class="change-font-color-link" :href="item.link" target="_blank">
									<span :class="$style.linkSpan">{{ item.name }}↗</span>
								</a>
							</div>
						</div>

						<div :class="$style.leftLinkFooter">
							<div :class="$style.linkList">
								<div :class="$style.list" v-for="(item, index) in linkFooter" :key="index">
									<div>
										<router-link class="change-font-color-link" :to="'/' + item.inPageLink">{{ item.inPage }}</router-link>
									</div>
									<div>
										<a class="change-font-color-link" :href="item.outPageLink" target="_blank">{{ item.outPage }}</a>
									</div>
									<div>
										<a class="change-font-color-link" :href="item.managePageLink" target="_blank">{{ item.managePage }}</a>
									</div>
								</div>
							</div>
						</div>

						<div :class="$style.rightLinkFooter">
							<span>당근마켓 앱 다운로드</span>
							<div :class="$style.downloadBtn">
								<div v-for="(item, index) in downloadFooter" :key="index">
									<a :href="item.link" target="_blank">
										<img :src="require('@/assets/button_' + item.image)">
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
@import '@/assets/scss/theme.scss';

* {
	padding: 0;
	margin: 0;

	box-sizing: border-box;

	font-family: 'Noto Sans KR', sans-serif;
}
</style>

<style lang="scss" module>
@import '@/assets/scss/utils.scss';

.index {

	> .container {
		@include mobile {
			width: 100%;
			min-width: 320px;
		}
		> .headContainer {		
			width: 100%;	
			height: 64px;

			position: fixed;
			top: 0;
			left: 0;
			z-index: 2;

			@include mobile {
				width: 100%;
				min-width: 320px;
				height: 56px;
			}

			> .header {
				width: 100%;
				max-width: 1200px;
				height: 100%;

				display: flex;
				align-items: center;

				margin: 0 auto;
				padding: 12px 16px;

				@include mobile {
					width: 100%;
					height: 100%;
				}

				> .leftHeader {
					width: 100%;
					display: flex;

					@include mobile {
						width: 100%;
					}

					> .logo {
						padding-right: 40px;
					}

					> .link {
						padding-right: 30px;

						transform: translateY(2px);

						@include mobile {
							display: none;
						}

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

						display: flex;

						margin-right: 12px;

						align-items: center;

						@include mobile {
							margin-right: 0px;
						}

						> .mobileIcon {
							display: none;

							cursor: pointer;

							@include semiMobile {
								display: flex;
							}
						}

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

					> .mobileIcon {
						display: none;

						margin-left: 16px;

						cursor: pointer;

						@include mobile {
							display: flex;
						}
					}

					> .chat {

						@include mobile {
							display: none;
						}

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

		> .mobileSearch {
			width: 100%;
			height: 100%;
			min-width: 320px;
			min-height: 56px;

			display: none;

			@include mobile {
				display: initial;
				position: fixed;
				top: 0;
				left: 0;

				z-index: 3;
			}

			> .search {
				height: 40px;

				display: flex;

				margin-top: 12px;
				padding: 0px 16px;

				> .searchInput {
					width: 100%;

					font-size: 16px;
					
					padding: 9px 12px;

					border: 0px;
					border-radius: 3px;
				}

				> .handler {
					width: 40px;
					height: 100%;

					font-size: 16px;

					margin-left: 16px;

					cursor: pointer;

					> .cancel {
						height: 100%;
						
						display: inline-block;

						border: none;
					}
				}
			}

			> .recommend {
				font-size: 14px;

				padding-top: 20px;

				padding: 12px 16px 0px;

				> .title {
					width: 100%;

					display: inline-block;

					font-weight: bold;

					padding-bottom: 5px;
				}

				> .keywords {
					width: 100%;

					display: flex;
					flex-wrap: wrap;

					> .list {
						width: 50%;

						padding: 16px 0px;

						border-bottom-width: 1px;
						border-bottom-style: solid;

						text-decoration: none;
					}

					> .list:nth-last-child(-n + 2) {
						border-bottom: none;
					}
				}
			}

			> .blackBox {
				height: 100%;

				opacity: 0.5;
			}
		}

		> .mobileMenu {
			width: 100%;
			height: 100%;
			min-width: 320px;
			min-height: 56px;

			display: none;


			@include mobile {
				display: initial;
				position: fixed;
				top: 56px;
				left: 0;

				z-index: 3;
			}

			> .list {
				
				padding: 12px 16px;
			
				> a {
					width: 100%;

					display: block;

					text-decoration: none;

					font-size: 16px;

					padding: 16px;
				}

				:global {
					.router-link-exact-active {

					}
				}	
			}

			> .blackBox {
				height: 100%;

				opacity: 0.5;
			}
		}
		
		> .mainContainer {
			min-width: 1200px;

			position: relative;

			padding-top: 64px;

			@include mobile {
				width: 100%;
				min-width: 320px;

				padding-top: 56px;
			}
		}

		> .footerContainer {
			min-width: 1200px;

			border-top-width: 1px;
			border-top-style: solid;

			@include mobile {
				width: 100%;
				min-width: 320px;
			}

			> .footer {
				width: 768px;

				margin: 0 auto;

				@include mobile {
					width: 100%;
					padding: 0px 16px;
				}

				> .linkFooter {
					display: flex;

					font-size: 14px;
					
					padding-top: 48px;
					padding-bottom: 48px;

					@include mobile {
						font-size: 13px;

						display: block;
					}
					
					> .mobileLinkFooter {
						width: 100%;

						display: none;

						margin-bottom: 20px;

						font-weight: bold;

						@include mobile {
							display: flex;
						}
						
						> div {
							padding-left: 24px;

							> a {
								text-decoration: none;
							}
						}

					}

					> .leftLinkFooter {						
						padding-right: 70px;

						@include mobile {
							padding-right: 0px;
						}

						> .linkList {
							width: 400px;
							height: 150px;

							@include mobile {
								width: 100%;
							}

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

						@include mobile {
							display: none;
						}
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

					@include mobile {
						font-size: 12px;
					}

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
import { LinkAddress, Link, Download, Info, Inquiry, Read, Keyword } from './structure/types'
import LinkFooterJsonFile from '@/assets/json/linkFooter.json'
import LinkJsonFile from '@/assets/json/link.json'
import InfoFooterJsonFile from '@/assets/json/infoFooter.json'
import KeywordsJsonFile from '@/assets/json/topKeywords.json'
import SearchIcon from '@/components/icon/SearchIcon.vue'
import MenuIcon from '@/components/icon/MenuIcon.vue'
import CloseIcon from '@/components/icon/CloseIcon.vue'
import { RawLocation } from 'vue-router'

@Component({
	components: {
		SearchIcon,
		MenuIcon,
		CloseIcon
	}
})
export default class App extends Vue {
	searchQuery: string = ""
	mode: string = this.$store.getters.getMode

	isShowMenu: boolean = false
	isShowSearch: boolean = false
	
	linkAddress: LinkAddress[] = LinkJsonFile.link as LinkAddress[]
	linkFooter: Link[] = LinkFooterJsonFile.link as Link[]
	downloadFooter: Download[] = LinkFooterJsonFile.download as Download[]
	infoFooter: Info[] = InfoFooterJsonFile.info as Info[]
	inquiryFoorer: Inquiry[] = InfoFooterJsonFile.inquiry as Inquiry[]
	readFooter: Read[] = InfoFooterJsonFile.read as Read[]
	keywords: Keyword[] = KeywordsJsonFile.keywords as Keyword[]


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

		this.$router.push({name: 'search', query: {q: this.searchQuery}});
	}

	getKeywordQuery(keyword: Keyword): RawLocation {
		this.isShowSearch = true

		return {name: 'search', query: {q: keyword.word}};
	}

	isHidden(): boolean {
		return this.isShowSearch
	}

	updateShowMenu() {
		this.isShowMenu = !this.isShowMenu
	}

	updateShowSearch() {
		this.isShowSearch = !this.isShowSearch

		if (this.isShowMenu == true) this.isShowMenu = false
	}
}
</script>
 