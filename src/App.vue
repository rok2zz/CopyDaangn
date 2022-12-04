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
							<input v-on:keydown="keydownHandler" :class="[$style.searchInput, 'input-background-color']" type="text" placeholder="물품이나 동네를 검색해보세요" v-model="searchID">
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
			<div :class="$style.footerContainer">
				<div :class="$style.footer">
					<div :class="$style.linkFooter">
					</div>
					<div :class="$style.infoFooter">
						<div :class="$style.leftInfoFooter">
							<span v-for="(item, index) in infoFooter" :key="index">
								<span :class="$style.footerBoldSpan">{{ item.bold }}</span>
								<span :class="$style.footerSpan"> {{ item.regular }}</span>
								<span :class="$style.footerLineSpan" v-if="(index == 0 || index == 4)">|</span>
								<span v-else><br></span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
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
@import '@/assets/theme.scss';

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
				padding: 12px;

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
					top: 0;
					right: 0;

					padding: 12px;
					> .search {
						padding-right: 12px;

						> .searchInput {
							width: 288px;
							height: 40px;

							padding: 9px;
							border: 0px;
							border-radius: 3px;

							@include semiMobile {
								display: none;
							}
						}

						:global {
							.input-background-color {

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
			
			> .footer {
				width: 768px;

				margin: 0 auto;

				> .linkFooter {
					padding-top: 48px;
					padding-bottom: 48px;
				}

				> .infoFooter {
					padding-top: 24px;
					padding-bottom: 100px;

					> .leftInfoFooter {
						
						> span {
							font-size: 13px;
							> .footerBoldSpan {
								font-weight: bold;
							}

							> .footerSpan {

							}
 
							> .footerLineSpan {
								padding: 4px;

								font-size: 10px;

								transform: translateY(10px);
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
import LinkJsonFile from '@/assets/link.json'
import ContentsJsonFile from '@/assets/contents.json'
import InfoFooterJsonFile from '@/assets/infoFooter.json'

@Component({
	components: {
		// HelloWorld,
	},
})
export default class HomeView extends Vue {
	mode: string = this.$store.getters.getMode
	linkAddress: any = LinkJsonFile.link
	sales: any = ContentsJsonFile.products
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


	keydownHandler(e: KeyboardEvent) {
		if (e.key == "Enter") {
		}
	}

}
</script>
 