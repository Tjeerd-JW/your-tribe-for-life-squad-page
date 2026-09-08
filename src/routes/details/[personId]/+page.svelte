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
	<a href={data.person.website} target="_blank">website</a>
</footer>

<style>
	.person-details {
		display: flex;
		justify-content: space-evenly;
	}
</style>
