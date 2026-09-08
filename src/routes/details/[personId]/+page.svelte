<script>
	let { data } = $props();
</script>

<main class="person-details">
	<section>
		<h1>{data.person.nickname}</h1>
		<img
			src="https://fdnd.directus.app/assets/{data.person.mugshot}"
			alt="foto van {data.person.name}"
			width="300"
		/>
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
