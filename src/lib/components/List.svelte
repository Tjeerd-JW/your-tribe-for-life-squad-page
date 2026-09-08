<script>
    let { persons } = $props();
</script>

<ul class="person-list">
    {#each persons as person}
        <li>
            <a href="/details/{person.id}" style="--fav-color: {person.fav_color}">
                {#if person.mugshot}
                    <img
                        src="https://fdnd.directus.app/assets/{person.mugshot}?width=250"
                        alt="foto van {person.name}"
                    />
                {:else}
                    <img
                        src="https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/86/Icon-Lifeweaver.png/revision/latest/scale-to-width-down/250?cb=20230411181321"
                        alt="foto van {person.name}"
                    />
                {/if}
            </a>
        </li>
    {/each}
</ul>

<style>
    .person-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 160px));
        gap: 0.5rem 0;
        justify-content: center;
        grid-column: 1 /-1;
        @media (min-width: 950px) {
            height: 90dvh;
            overflow: auto;
            grid-row: 2;
            grid-column: 2;
        }
        li {
            list-style: none;
            a {
                &:focus{
                    outline: 4px solid var(--fav-color);
                    transform: scale(2);
                }
                &:hover{
                    transform: scale(2);
                }

                img {
                    aspect-ratio: 1/1;
                    object-fit: cover;
                    width: clamp(125px, 100%, 150px);
                    display: grid;
                    margin: 0 auto;
                }
            }
        }
    }
</style>
