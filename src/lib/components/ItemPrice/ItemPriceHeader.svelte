<script>
    import {fade} from 'svelte/transition';

    export let query
    export let sell
</script>

<div class="grid {query === undefined || query.length === 0 ? 'h-screen place-items-center':'justify-center'}"
     in:fade="{{ duration: 300, delay: 200}}">
    <div class="card card-bordered card-body bg-base-200 my-6">
        <div class="flex items-stretch justify-center mb-7">
            <h1 class="text-xl xl:text-4xl font-bold">Find the best place to {sell ? 'sell' : 'buy'} an item!</h1>
        </div>
        <div class="form-control">
            <input bind:value={query} type="text" placeholder="Name"
                   class="input input-bordered input-md font-semibold"/>
        </div>
    </div>
</div>