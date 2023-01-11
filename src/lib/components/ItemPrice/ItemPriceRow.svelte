<script>
    export let item
    const topItems = 3
    export let sell;
    let forr
    if (sell)
        forr = item.sellFor.sort((a, b) => b.priceRUB - a.priceRUB)
    else
        forr = item.buyFor.sort((a, b) => b.priceRUB - a.priceRUB)
</script>

<tr>
    <td>
        <div class="flex items-center space-x-3">
            <div class="mask w-16">
                <img src="{item.iconLink}" alt="Avatar Tailwind CSS Component"/>
            </div>
            <div>
                <a class="link font-bold" href={item.wikiLink}>{item.name}</a>
            </div>
        </div>
    </td>
    {#if forr.length !== 0}
        {#each forr.slice(0, topItems) as price}
            <td>
                <div class="flex items-center space-x-3">
                    <div class="mask w-16">
                        {#if price.source === 'fleaMarket'}
                            <img src="https://cdn-icons-png.flaticon.com/512/2230/2230606.png" alt=""/>
                        {:else}
                            <img src="https://tarkov.dev/images/{price.source}-icon.jpg" alt=""/>
                        {/if}
                    </div>
                    <div>
                        {price.priceRUB} {price.currency}
                        ({Math.round(price.priceRUB / (item.width * item.height))} {price.currency}/slot)
                    </div>
                </div>
            </td>
        {/each}
    {:else}
        <td>
            No sells for this item
        </td>
    {/if}
</tr>