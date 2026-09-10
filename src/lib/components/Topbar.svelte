<script>
    let data = $props();
    let title = $derived(data.title);
</script>

<h1>
    {#each title.split("") as letter, i}
        <span style="--delay: {i * 0.05}s">
            <!-- Als letter een spatie is zet een whitespace neer -->
            {letter === " " ? "\u00A0" : letter}
        </span>
    {/each}
</h1>

<style>
    h1 {
        grid-column: 1/-1;
        width: 100dvw;
        background-color: var(--primary-color);
        text-align: center;
        font-size: var(--font-size-2xl);

        span {
            display: inline-block;
            animation: bounce 10s ease-in-out var(--delay) infinite;
        }
    }

    @keyframes bounce {
        0%,
        90%,
        100% {
            transform: translateY(0);
        }

        95% {
            transform: translateY(-12px);
        }
    }
</style>
