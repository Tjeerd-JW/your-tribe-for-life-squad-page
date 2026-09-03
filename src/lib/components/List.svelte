<script>
    let { persons } = $props();
</script>

<div class="person-list">
    {#each persons as person}
        <a href="/details/{person.id}">
            {#if person.mugshot}
                <img
                    src="https://fdnd.directus.app/assets/{person.mugshot}?width=250"
                    alt={person.name}
                />
            {:else}
                <img
                    src="https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/86/Icon-Lifeweaver.png/revision/latest/scale-to-width-down/250?cb=20230411181321"
                    alt={person.name}
                />
            {/if}
        </a>
    {/each}
</div>

<style>
    .person-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 160px));
        gap: 0.5rem 0;
        justify-content: center;
        overflow: scroll;
        /* max-height: clamp(300px, 75dvh, 550px); */

        grid-column: 1 /-1;
        @media (min-width: 950px) {
            grid-row: 2;
            grid-column: 2;
        }
        a {
            img {
                aspect-ratio: 1/1;
                object-fit: cover;
                width: clamp(125px, 100%, 150px);
                display: grid;
                margin: 0 auto;
            }
        }
    }
</style>
