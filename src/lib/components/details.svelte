<script>
	let { data } = $props();
	let person = $derived(data.person);
</script>

<footer>
	<div>
		<p>
			{person.bio ?? "ik heb geen bio ingevuld"}
		</p>
		<p>
			{person.fav_hobby ?? "geen hobbies"}
		</p>
		<p>
			{person.fav_game ?? "geen favoriete game"}
		</p>
	</div>

	{#if person.website}
		<a href={person.website} target="_blank">website</a>
	{:else}
		<p>ik heb geen website</p>
	{/if}
	{#if person.github_handle}
		<a href="https://github.com/{person.github_handle}" target="_blank">
			{person.github_handle}
		</a>
	{:else}
		<p>geen github naam ingevuld</p>
	{/if}
</footer>
