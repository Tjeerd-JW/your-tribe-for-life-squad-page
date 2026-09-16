export async function load(params) {
	let personData = null;
	const personId = params?.params?.personId;

	const res = await fetch(
		"https://fdnd.directus.app/items/person/?filter[squads][squad_id][name]=2G&sort=name",
	);
	const data = await res.json();

	if (personId) {
		const person = await fetch(
			`https://fdnd.directus.app/items/person/?filter[squads][squad_id][name]=2G&fields=id,name,fav_game,vibe_emoji,residency,fav_hobby,fav_color,bio,website,github_handle,nickname,mugshot,birthdate&filter[id][_eq]=${params.params.personId ?? 0}`,
		);
		personData = await person.json();
	}

	return {
		persons: data.data,
		person:  personData?.data?.[0] ?? null
	};
}
