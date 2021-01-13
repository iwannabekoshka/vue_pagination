<template>
	<div id="app">
		<sliding-pagination
				:current="currentPage"
				:total="totalPages"
				@page-change="pageChangeHandler"
		></sliding-pagination>

		<Page
			v-bind:elements="sliceElements"
		/>
	</div>
</template>

<script>
	import SlidingPagination from 'vue-sliding-pagination'
	import Page from "@/components/Page";

	export default {
		name: 'App',
		components: {Page, SlidingPagination},
		data() {
			return {
				currentPage: 1,
				totalPages: null,
				elementsOnPage: 3,

				pagesData: [
					{
						text: 'text1',
					},
					{
						text: 'text2',
					},
					{
						text: 'text3',
					},
					{
						text: 'text4',
					},
					{
						text: 'text5',
					},
					{
						text: 'text6',
					},
					{
						text: 'text7',
					},
					{
						text: 'text8',
					},
					{
						text: 'text9',
					},
				],
			}
		},
		mounted() {
			this.totalPages = Math.ceil(this.pagesData.length / this.elementsOnPage)
		},
		computed: {
			sliceElements: function () {
				return this.pagesData.slice((this.currentPage-1) * this.elementsOnPage, this.currentPage * this.elementsOnPage)
			}
		},
		methods: {
			pageChangeHandler(selectedPage) {
				this.currentPage = selectedPage
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;

		box-sizing: border-box;
	}
	#app {
		font-size: 24px;
		font-family: monospace;

		display: flex;
		flex-direction: column;
	}

	/* pagination */
	.c-sliding-pagination__list {
		display: flex;
		flex-direction: row;
		justify-content: center;

		list-style: none;
	}

	.c-sliding-pagination__list-element {
		margin-right: 1rem;
		background-color: cornflowerblue;
	}
	.c-sliding-pagination__list-element * {
		display: block;
		padding: 1rem;
		width: 100%;
		height: 100%;

		color: white;
		text-decoration: none;
	}
	.c-sliding-pagination__list-element--active {
		background-color: #4a6faf;
	}
</style>