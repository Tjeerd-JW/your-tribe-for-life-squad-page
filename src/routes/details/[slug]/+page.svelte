<script>
    let {data} = $props();

    const persons = data.persons;
</script>

{#each persons as person }
    {person.nickname}<br>
{/each}

<h1>nickname</h1>
<img >
<p>
    description
</p>

<p></p>

<a>website</a>
<a>github</a>