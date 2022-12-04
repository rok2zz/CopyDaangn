<template>
  <div :class="$style.index">
    <div :class="$style.container">
		<div :class="$style.contents">

		</div>
    </div>
  </div>
</template>

<style lang="scss" module>
.index {
	
	> .container {
		background-color: #f8f7f2;
		> .contents {

		}
	}
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
	sales: any = {}

	mounted() {
		this.sales = this.$store.getters.getSales
		
		this.$store.commit('setMode', 'light')
	}
}
</script>
