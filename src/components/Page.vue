<template>
	<ul>
		<PageItem
				v-for="element of elements"
				:key="element.text"
				v-bind:element="element" >
		</PageItem>
	</ul>
</template>

<script>
	import PageItem from "@/components/PageItem";

	export default {
		name: "Page",
		props: ['elements'],
		components: {PageItem},
		data() {
			return {

			}
		}
	}
</script>

<style scoped>

</style>