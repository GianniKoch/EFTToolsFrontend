<script>
    import ItemPriceHeader from "./ItemPriceHeader.svelte";
    import ItemPriceTable from "./ItemPriceTable.svelte";

    export let sell

    let query
</script>

<ItemPriceHeader bind:query {sell}/>
{#if query !== undefined && query.length !== 0}
    <ItemPriceTable bind:query {sell}/>
{/if}