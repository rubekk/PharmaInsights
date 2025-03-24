<script>
    import DiscontinuedForm from "./../../components/form/DiscontinuedForm.svelte";
    import BannedForm from "./../../components/form/BannedForm.svelte";
    import HarmfulForm from "./../../components/form/HarmfulForm.svelte";
    import FormSelect from "./../../components/form/FormSelect.svelte";
    import { formType } from "$lib/store";
  
    let currentFormType;
  
    formType.subscribe((value) => {
      currentFormType = value;
    });
  </script>
  
  <FormSelect />
  
  {#if currentFormType == "discontinued"}
    <DiscontinuedForm />
  {:else if currentFormType == "banned"}
    <BannedForm />
  {:else if currentFormType == "harmful"}
    <HarmfulForm />
  {/if}
  