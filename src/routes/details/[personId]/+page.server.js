export async function load({ fetch, params }) {
	const res = await fetch(
		`https://fdnd.directus.app/items/person/?filter[squads][squad_id][name]=2G&fields=id,name,fav_game,vibe_emoji,residency,fav_hobby,fav_color,bio,website,github_handle,nickname,name,mugshot,birthdate&filter[id][_eq]=${params.personId}`,
	);
	const data = await res.json();

	return { person: data.data[0] };
}
