<script>
    import BannedCard from "../card/BannedCard.svelte";

    const data = {
        medicine_name: "Paracetamol",
        brand: "Panadol",
        year_of_ban: 2022,
        ban_reason: ["Toxic side effects"],
    };
</script>

<div class="browse">
    <h2>Browse medicine data</h2>

    <input type="text" placeholder="Search" />

    <div class="list">
        <div class="row">
            <BannedCard {data} />
            <BannedCard {data} />
        </div>
        <div class="row">
            <BannedCard {data} />
            <BannedCard {data} />
        </div>
        <div class="row">
            <BannedCard {data} />
            <BannedCard {data} />
        </div>
    </div>
</div>
