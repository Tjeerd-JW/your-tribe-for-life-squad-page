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
	<div>lijst van mensen en hun afbeeldingen</div>
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
		justify-content: space-evenly;
	}
</style>
