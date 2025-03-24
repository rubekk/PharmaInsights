<script>
    import { formType } from "$lib/store";

    let currentFormType;

    formType.subscribe((value) => {
        currentFormType = value;
    });

    const selectOptions = [
        {
            label: "Discontinued medicine",
            value: "discontinued",
        },
        {
            label: "Banned medicine",
            value: "banned",
        },
        {
            label: "Harmful medicine",
            value: "harmful",
        },
    ];

    const changeOption = (index) => formType.set(selectOptions[index].value);
</script>

<div class="form-select">
    {#each selectOptions as option, index}
        <div
            class={option.value == currentFormType ? "select active" : "select"}
            on:click={() => changeOption(index)}
            role="button"
            tabindex="0"
            on:keydown={() => {}}
        >
            <div class="option">{option.label}</div>
        </div>
    {/each}
</div>
