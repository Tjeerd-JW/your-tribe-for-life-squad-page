<script>
    import placeholder from '$lib/img/person-placeholder.png'
    let { data } = $props();

    const persons = data.persons;
</script>

<section class="person-details">
    <h2>Selecteer een persoon uit de lijst</h2>
    <img src="{placeholder}" alt="placeholder" width="300" height="200" />
</section>

<style>
img{
    object-fit: contain;
}
</style>
