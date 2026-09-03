<script>
    import List from "$lib/components/List.svelte";
    let { data } = $props();

    const persons = data.persons;
</script>

<main>
    <div class="select-screen">
        <h1 class="name">Choose your character</h1>
        <div class="detail-img">
            <img
                src="https://static.wikitide.net/deathbattlewiki/c/c8/Portrait.ramattra.png"
                alt="placeholder"
            />
        </div>
        <List class="detail-list" {persons} />
        <div class="details"></div>
    </div>
</main>

<style>
    .select-screen {
        display: grid;
        grid-template-columns: 1fr 1fr;
        h1 {
            grid-column: 1/-1;
        }
        .detail-img {
            img {
                width: 100%;
                max-height: 1000px;
                object-fit: contain;
            }
        }
        .detail-list {
        }
        .details {
            grid-column: 1/-1;
        }
    }
</style>
