<script>
    import {fade} from 'svelte/transition';
    import ItemPriceRow from "./ItemPriceRow.svelte";
    import {getItems} from "../../../services/BackendService.js";
    import {SpinLine} from "svelte-loading-spinners";

    export let query;
    export let sell;
    let items;

    $: query && getItems().then(list => items = list.filter(filterItem))

    setInterval(() => getItems().then(list => items = list.filter(filterItem)), 1000*60*2.5)

    function filterItem(item) {
        const trimmedQuery = trimText(query);
        return trimText(item.name).includes(trimmedQuery) ||
            trimText(item.shortName).includes(trimmedQuery)

    }

    function trimText(text) {
        return text.trim().toLowerCase().replace(/\s+/g, '')
    }
</script>


{#if query.length !== 0 && items === undefined}
    <div class="flex justify-center mt-32" in:fade="{{ delay: 400}}">
        <div>
            <SpinLine size="60" color="#efefef" unit="px"/>
            <p class="mt-8">Loading...</p>
        </div>
    </div>
{:else if query.length !== 0 && items.length === 0}
    <div class="flex justify-center mt-32" in:fade="{{ delay: 400}}">
        <div>
            <p class="mt-8">No items found</p>
        </div>
    </div>
{:else}
    <div class="mx-10 grid justify-center">

        <table class="table" in:fade="{{ delay: 400}}">
            <thead>
            <tr>
                <th>Item</th>
                <th>Best price</th>
                <th>2nd price</th>
                <th>3th price</th>
            </tr>
            </thead>
            <tbody>
            {#each items.slice(0, 50) as item}
                <ItemPriceRow {item} {sell}/>
            {/each}
            </tbody>
        </table>
    </div>
{/if}