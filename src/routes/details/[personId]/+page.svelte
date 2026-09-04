<script>
    let {data} = $props();

</script>

<main class="person-details">
    <div>
        <h1>{data.person.nickname}</h1>
        <img src="https://fdnd.directus.app/assets/{data.person.mugshot}?width=500" alt="foto van {data.person.name}" width="300">
        <p>
            {data.person.bio}
        </p>
        <div>
            <p>
                {data.person.fav_hobby}
            </p>
            <p>
                {data.person.fav_game}
            </p>
        </div>
        <a href={data.person.website}>website</a>
    </div>
    <div>
        afbeeldingen
    </div>
</main>
