<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="$style.searchContainer">
				query를 받아서 검색
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
	searchQuery?: string
}
</script>
