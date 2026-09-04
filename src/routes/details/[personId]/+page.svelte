<script>
	let { data } = $props();

	console.log(data.person);
</script>

<main class="person-details">
	<div>
		<h1>{data.person.nickname}</h1>
		<img
			src="https://fdnd.directus.app/assets/{data.person.mugshot}"
			alt="foto van {data.person.name}"
			width="300"
		/>
	</div>
	<div>afbeeldingen</div>
</main>
<footer>
	<div>
		<p>
			{data.person.bio}
		</p>
		<p>
			{data.person.fav_hobby}
		</p>
		<p>
			{data.person.fav_game}
		</p>
	</div>
	<a href={data.person.website}>website</a>
</footer>

<style>
	.person-details {
		display: flex;
	}
</style>
