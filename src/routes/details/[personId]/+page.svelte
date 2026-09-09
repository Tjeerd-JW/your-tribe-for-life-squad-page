<script>
	let { data } = $props();
</script>

<main class="person-details">
	<section>
		{#if data.person.nickname}
			<h1>{data.person.nickname}</h1>
		{:else}
			<h1>ik heb geen nickname</h1>
		{/if}

		{#if data.person.mugshot}
			<img
				src="https://fdnd.directus.app/assets/{data.person.mugshot}?width=300"
				alt="foto van {data.person.name}"
				width="300"
			/>
		{:else}
			<img
				src="https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/86/Icon-Lifeweaver.png/revision/latest/scale-to-width-down/250?cb=20230411181321"
				alt="foto van {data.person.name}"
				width="300"
			/>
		{/if}
	</section>
</main>
<footer>
	<div>
		<p>
			{data.person.bio ?? "ik heb geen bio ingevuld"}
		</p>
		<p>
			{data.person.fav_hobby ?? "geen hobbies"}
		</p>
		<p>
			{data.person.fav_game ?? "geen favoriete game"}
		</p>
	</div>

	{#if data.person.website}
		<a href={data.person.website} target="_blank">website</a>
	{:else}
		<p>ik heb geen website</p>
	{/if}
	{#if data.person.github_handle}
		<a href="https://github.com/{data.person.github_handle}" target="_blank">
			{data.person.github_handle}
		</a>
	{:else}
		<p>geen github naam ingevuld</p>
	{/if}
</footer>

<style>
	.person-details {
		display: flex;
		justify-content: space-evenly;
	}
</style>
