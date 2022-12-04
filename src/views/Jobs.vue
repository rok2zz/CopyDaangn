<template>
	<div :class="$style.index">
		
	</div>
</template>

<style lang="scss" module>
.index {
  
}

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
	components: {
		// HelloWorld,
	},
})
export default class DaangnHome extends Vue {
	mode: string = this.$store.getters.getMode
	
	mounted() {
		this.$store.commit('setMode', "dark")
	}
}
</script>
