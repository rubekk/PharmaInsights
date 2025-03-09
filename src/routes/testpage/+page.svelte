<script>
    import './../app.css';
    import Header from '../../components/Header.svelte';
    import DiscontinuedForm from '../../components/forms/DiscontinuedForm.svelte';
    import BannedForm from '../../components/forms/BannedForm.svelte';
    import HarmfulForm from '../../components/forms/HarmfulForm.svelte';
    import { formType } from '../../lib/store';
</script>

<Header />
<DiscontinuedForm />
<BannedForm />
<HarmfulForm />