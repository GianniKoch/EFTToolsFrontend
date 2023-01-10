<script>
    import ItemPriceHeader from "./ItemPriceHeader.svelte";
    import ItemPriceTable from "./ItemPriceTable.svelte";

    let query
</script>

<ItemPriceHeader bind:query/>
{#if query !== undefined && query.length !== 0}
    <ItemPriceTable bind:query/>
{/if}