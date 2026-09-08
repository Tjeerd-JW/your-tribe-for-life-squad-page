<script>
  import Filter from "$lib/components/Filter.svelte";
  import List from "$lib/components/List.svelte";
  
  let { data } = $props();

  const persons = data.persons;
</script>

<h2>Selecteer een persoon uit de lijst</h2>
<Filter />
