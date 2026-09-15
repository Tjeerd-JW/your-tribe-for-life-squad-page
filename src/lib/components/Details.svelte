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
