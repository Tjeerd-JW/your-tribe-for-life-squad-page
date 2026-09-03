// export async function load(fetch, params) {
// 	const res = await fetch(
// 		"https://fdnd.directus.app/items/person/?filter[squads][squad_id][name]=2G&fields=name,fav_game,vibe_emoji,residency,fav_hobby,fav_color,bio,website,github_handle,nickname,name,mugshot,birthdate",
// 	);
// 	const data = await res.json();

// 	console.log(params);

// 	return {
// 		persons: data.data,
// 	};
// }

// tutorial gevolgd hoe je data in svelt kan ophalen https://www.youtube.com/watch?v=gNgQFF-tmuo
export const load = ({ fetch, params }) => {
	console.log(params);

	const fetchPerson = async (id) => {
		const res = await fetch(
			`https://fdnd.directus.app/items/person/?filter[squads][squad_id][name]=2G&fields=id,name,fav_game,vibe_emoji,residency,fav_hobby,fav_color,bio,website,github_handle,nickname,name,mugshot,birthdate&filter[id][_eq]=${id}`,
		);
		const data = await res.json();
		return data;
	};

	return {
		person: fetchPerson(params.personId),
	};
};
