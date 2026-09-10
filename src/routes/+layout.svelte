<script>
	import favicon from "$lib/assets/favicon.svg";
	import "../app.css";
	import List from "$lib/components/List.svelte";
	import Details from "$lib/components/details.svelte";

	let { children, data } = $props();
	const persons = data.persons;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main>
	<section class="select-screen">
		<h1 class="name">Choose your character</h1>
		<div class="detail-content">
			{@render children()}
		</div>
		<List {persons} />
	</section>
	<Details {personData} />
</main>

<style>
	.select-screen {
		display: grid;
		grid-template-columns: 1fr 1fr;
		h1 {
			grid-column: 1/-1;
		}
		.detail-content {
			grid-column: 1 /-1;
			@media (min-width: 950px) {
				grid-row: 2;
				grid-column: 1;
			}
		}
	}
</style>
