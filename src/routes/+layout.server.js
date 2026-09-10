export async function load() {
	const res = await fetch(
		"https://fdnd.directus.app/items/person/?filter[squads][squad_id][name]=2G&sort=name",
	);
	const data = await res.json();

	const person = await fetch(
		`https://fdnd.directus.app/items/person/?filter[squads][squad_id][name]=2G&fields=id,name,fav_game,vibe_emoji,residency,fav_hobby,fav_color,bio,website,github_handle,nickname,mugshot,birthdate&filter[id][_eq]=${params.personId}`,
	);
	const personData = await res.json();

	return { persons: data.data, person: personData.data[0] };
}
