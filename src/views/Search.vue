<template>
	<div :class="$style.index">
		<div :class="$style.container">
		
		</div>
	</div>
</template>

<style lang="scss" module>
.index {
	
	> .container {
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
