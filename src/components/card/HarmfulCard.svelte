<script>
    export let data;

    // data = {
    // medicine_name: "Paracetamol",
    // "brand": "Panadol",
    // "year_of_ban": 2022,
    // "ban_reason": ["Toxic side effects"]
    // }
</script>

{#if data}
    <div class="card">
        <div class="card-row">
            <div class="key-value">
                <div class="key">Medicine:</div>
                <div class="value">{data.medicine_name}</div>
            </div>

            <div class="key-value">
                <div class="key">Brand:</div>
                <div class="value">{data.brand}</div>
            </div>
        </div>

        <div class="key-value">
            <div class="key">Year of ban:</div>
            <div class="value">{data.year_of_ban}</div>
        </div>

        <div class="key-value">
            <div class="key">Ban reason:</div>
            <div class="value">
                {#each data.ban_reason as reason}
                    {reason}
                {/each}
            </div>
        </div>

        <div class="tag">banned</div>
    </div>
{/if}
