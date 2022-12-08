<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="$style.searchContainer">
				{{ searchQuery }} 검색 결과
			</div>
		</div>
	</div>
</template>

<style lang="scss" module>
.index {
	
	> .container {

		> .searchContainer {
			width: 1024px;

			margin: 0 auto;
			padding: 200px 0px;
			text-align: center;
		}
	}
}

</style>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';


@Component({
	components: {
		// HelloWorld,
	},
})
export default class Hot_Articles extends Vue {
	searchQuery: any = this.$route.query.q
	mode: string = this.$store.getters.getMode

	mounted() {
		this.$store.commit('setMode', 'light')
	}
}
</script>
