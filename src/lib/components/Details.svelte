<script>
	let { person } = $props();
</script>

<footer>
	<p>
		{person.bio ?? "ik heb geen bio ingevuld"}
	</p>
	<p>
		hobby: {person.fav_hobby ?? "geen hobbies"}
	</p>
	<p>
		game: {person.fav_game ?? "geen favoriete game"}
	</p>

	{#if person.website}
		<a href={person.website} target="_blank">website</a>
	{:else}
		<p>ik heb geen website</p>
	{/if}
	{#if person.github_handle}
		<a href="https://github.com/{person.github_handle}" target="_blank">
			github
		</a>
	{:else}
		<p>geen github naam ingevuld</p>
	{/if}
</footer>
