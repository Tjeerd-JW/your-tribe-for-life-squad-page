<script>
	import favicon from "$lib/assets/favicon.svg";
	import "../app.css";
	import List from "$lib/components/List.svelte";
	import Topbar from "$lib/components/Topbar.svelte";
	import Details from "$lib/components/Details.svelte";

	let { children, data } = $props();
	const persons = data.persons;
	const person = data.person;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main>
	<section class="select-screen">
		<Topbar title="Choose your character" />
		<div class="detail-content">
			{@render children()}
		</div>
		<List {persons} />
	</section>
	<Details {person} />
</main>

<style>
	.select-screen {
		display: grid;
		grid-template-columns: 1fr 1fr;

		.detail-content {
			grid-column: 1 /-1;
			@media (min-width: 950px) {
				grid-row: 2;
				grid-column: 1;
			}
		}
	}
</style>
