<script>
	import favicon from "$lib/assets/favicon.svg";
	import "../app.css";
	import List from "$lib/components/List.svelte";

	let { children, data } = $props();
	const persons = data.persons;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main>
	<div class="select-screen">
		<h1 class="name">Choose your character</h1>
		<div class="detail-img">
			<!-- <img
                src="https://static.wikitide.net/deathbattlewiki/c/c8/Portrait.ramattra.png"
                alt="placeholder"
            /> -->
			{@render children()}
		</div>
		<List class="detail-list" {persons} />
		<div class="details">
			<h2>details komen hier</h2>
		</div>
	</div>
</main>

<style>
	.select-screen {
		display: grid;

		@media (min-width: 950px) {
		}
		grid-template-columns: 1fr 1fr;
		h1 {
			grid-column: 1/-1;
		}
		.detail-img {
			grid-column: 1 /-1;
			place-content: end;
			@media (min-width: 950px) {
				place-content: start;
				grid-row: 2;
				grid-column: 1;
			}
			img {
				width: 100%;
				object-fit: contain;
				height: clamp(150px, 50dvh, 350px);

				@media (min-width: 950px) {
					height: unset;
					max-height: 1000px;
				}
			}
		}

		.details {
			grid-column: 1/-1;
			grid-row: 3;
			@media (min-width: 950px) {
				grid-row: 4;
			}
		}
	}
</style>
