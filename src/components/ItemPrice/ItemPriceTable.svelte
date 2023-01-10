<script>
    import ItemPriceRow from "./ItemPriceRow.svelte";
    import {getItems} from "../../services/BackendService.js";
    import {SpinLine} from "svelte-loading-spinners";

    export let query;
    let items;

    $: if (query) {
        getItems().then(list => items = list.filter(filterItem))
    }

    function filterItem(item) {
        const trimmedQuery = trimText(query);
        return trimText(item.name).includes(trimmedQuery) ||
            trimText(item.shortName).includes(trimmedQuery)

    }

    function trimText(text){
        return text.trim().toLowerCase().replace(/\s+/g, '')
    }
</script>


{#if query.length !== 0 && items === undefined}
    <div class="flex justify-center mt-32">
        <div>
            <SpinLine size="60" color="#efefef" unit="px"/>
            <p class="mt-8">Loading...</p>
        </div>
    </div>
{:else if query.length !== 0 && items.length === 0}
    <div class="flex justify-center mt-32">
        <div>
            <p class="mt-8">No items found</p>
        </div>
    </div>
{:else}
    <table>
        <thead>
        <tr>
            <th>Item</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {#each items as item}
            <ItemPriceRow {item}/>
        {/each}
        </tbody>
    </table>
{/if}