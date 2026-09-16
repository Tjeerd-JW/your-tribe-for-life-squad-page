<script>
  let { data } = $props();
  let person = $derived(data.person);
</script>

<section class="person-details">
  {#if person.nickname}
    <h2>{person.nickname}</h2>
  {:else}
    <h2>ik heb geen nickname</h2>
  {/if}

  {#if person.mugshot}
    <img
      src="https://fdnd.directus.app/assets/{person.mugshot}?width=300"
      alt="foto van {person.name}"
      width="300"
    />
  {:else}
    <img
      src="https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/86/Icon-Lifeweaver.png/revision/latest/scale-to-width-down/250?cb=20230411181321"
      alt="foto van {person.name}"
      width="300"
    />
  {/if}
</section>
