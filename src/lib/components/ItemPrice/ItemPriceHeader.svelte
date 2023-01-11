<script>
    import {fade} from 'svelte/transition';

    export let query
</script>

{#if query === undefined || query.length === 0}
    <div class="grid h-screen place-items-center"
         in:fade="{{ duration: 300, delay: 200}}">
        <div class="card card-bordered card-body bg-base-200 mt-6">
            <div class="flex items-stretch justify-center mb-7">
                <h1 class="text-xl xl:text-4xl font-bold">Find the best place to sell an item!</h1>
            </div>
            <div class="form-control">
                <input bind:value={query} type="text" placeholder="Name"
                       class="input input-bordered input-md font-semibold"/>
            </div>
        </div>
    </div>
    {:else}
    <div class="grid justify-center"
         in:fade="{{ duration: 300}}">
        <div class="card card-bordered card-body bg-base-200 mt-6">
            <div class="flex items-stretch justify-center mb-7">
                <h1 class="text-xl xl:text-4xl font-bold">Find the best place to sell an item!</h1>
            </div>
            <div class="form-control">
                <input bind:value={query} type="text" placeholder="Name"
                       class="input input-bordered input-md font-semibold"/>
            </div>
        </div>
    </div>
{/if}