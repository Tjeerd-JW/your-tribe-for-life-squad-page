<script>
    let { persons } = $props();
</script>

<ul class="person-list">
    {#each persons as person}
        <li>
            <a
                href="/details/{person.id}"
                style="--fav-color: {person.fav_color}"
            >
                {#if person.mugshot}
                    <img
                        src="https://fdnd.directus.app/assets/{person.mugshot}?width=300"
                        alt="foto van {person.name}"
                        width="150"
                        height="150"
                    />
                {:else}
                    <img
                        src="https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/86/Icon-Lifeweaver.png/revision/latest/scale-to-width-down/250?cb=20230411181321"
                        alt="foto van {person.name}"
                        width="150"
                        height="150"
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
        padding: 80px 20px;

        @media (min-width: 950px) {
            height: 85dvh;
            overflow: auto;
            grid-row: 2;
            grid-column: 2;
        }
        li {
            list-style: none;
            a {
                display: block;
                transition: ease-in-out 0.2s;

                &:focus img {
                    outline: 2px solid var(--fav-color);
                    transform: scale(1.1);
                }
                &:hover img {
                    transform: scale(1.1);
                }

                img {
                    aspect-ratio: 1/1;
                    object-fit: cover;
                    width: clamp(125px, 100%, 150px);
                    outline: var(--fav-color);
                    display: grid;
                    margin: 0 auto;
                    transition: inherit;
                }
            }
        }
    }
</style>
