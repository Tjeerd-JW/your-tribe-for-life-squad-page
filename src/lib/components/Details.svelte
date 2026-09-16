<script>
	let { person } = $props();
</script>

<footer>
	<p>
		{person?.bio ?? "geen bio"}
	</p>
	<div class="person-facts">
		<p>
			hobby: {person?.fav_hobby ?? "geen hobbies"}
		</p>
		<p>
			game: {person?.fav_game ?? "geen favoriete game"}
		</p>
	</div>
	<div class="person-links">
		{#if person?.website}
			<a href={person?.website} target="_blank">website</a>
		{:else}
			<p>ik heb geen website</p>
		{/if}
		{#if person?.github_handle}
			<a href="https://github.com/{person.github_handle}" target="_blank">
				github
			</a>
		{:else}
			<p>geen github naam ingevuld</p>
		{/if}
	</div>
</footer>

<style>
	footer {
		background: var(--triary-color);
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: var(--space-xs);
		padding: var(--space-xs);

		p {
			grid-row: span 2;
			align-content: center;
		}
		.person-facts {
		}
		.person-links {
			grid-row: 1;
			grid-column: 2;
			display: flex;
			align-items: baseline;
			gap: var(--space-xs);

			a,
			p {
				border: 1px solid var(--font-color);
				width: fit-content;
				padding: var(--space-3xs) var(--space-xs);
				border-radius: var(--space-xs);
				background-color: var(--background-color);
				text-decoration: none;
				color: var(--font-color);
			}
		}
	}
</style>
