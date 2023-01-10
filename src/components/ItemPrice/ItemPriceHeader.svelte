<script>
    export let query
</script>

<div class="grid {query === undefined || query.length === 0 ? 'h-screen place-items-center': 'justify-center mt-6'}">
    <div class="card card-bordered card-body bg-base-200">
        <div class="flex items-stretch justify-center mb-7">
            <h1 class="text-xl xl:text-4xl font-bold">Find the best place to sell an item!</h1>
        </div>
        <div class="form-control">
            <input bind:value={query} type="text" placeholder="Name"
                   class="input input-bordered input-md font-semibold"/>
        </div>
    </div>
</div>