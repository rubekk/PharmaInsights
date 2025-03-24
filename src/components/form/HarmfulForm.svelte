<script>
    import FormTitle from "./FormTitle.svelte";

    let harmfulMedicine = {
        medicineName: "",
        brandName: "",
        activeIngredients: "",
        harmfulChemicals: "",
        chemicalsSource: "",
        healthRisks: "",
        authorityWarnings: "",
        yearDetected: "",
        regulatoryAction: "",
        manufacturerName: "",
        countryOfOrigin: "",
        nepalApprovalStatus: "Unknown",
        alternativeMedicines: "",
    };

    const handleSubmit = () => {
        console.log("Form submitted:", harmfulMedicine);
        // Handle form submission here
    };
</script>

<div class="form-container">
    <form on:submit|preventDefault={handleSubmit}>
        <FormTitle title="Harmful medicine" />

        <div class="form-row">
            <div class="form-group">
                <label for="medicineName"
                    >Medicine Name <span class="required">*</span></label
                >
                <input
                    type="text"
                    id="medicineName"
                    bind:value={harmfulMedicine.medicineName}
                    required
                    placeholder="Enter medicine name"
                />
            </div>

            <div class="form-group">
                <label for="brandName">Brand Name</label>
                <input
                    type="text"
                    id="brandName"
                    bind:value={harmfulMedicine.brandName}
                    placeholder="Enter brand name if applicable"
                />
            </div>
        </div>

        <div class="form-row">
            <div class="form-group">
                <label for="manufacturerName"
                    >Manufacturing Company Name <span class="required">*</span
                    ></label
                >
                <input
                    type="text"
                    id="manufacturerName"
                    bind:value={harmfulMedicine.manufacturerName}
                    required
                    placeholder="Enter manufacturer name"
                />
            </div>

            <div class="form-group">
                <label for="countryOfOrigin"
                    >Country of Origin <span class="required">*</span></label
                >
                <input
                    type="text"
                    id="countryOfOrigin"
                    bind:value={harmfulMedicine.countryOfOrigin}
                    required
                    placeholder="Enter country of manufacture"
                />
            </div>
        </div>

        <div class="form-row">
            <div class="form-group">
                <label for="yearDetected"
                    >Year Detected/Reported <span class="required">*</span></label
                >
                <input
                    type="number"
                    id="yearDetected"
                    bind:value={harmfulMedicine.yearDetected}
                    required
                    min="1900"
                    max={new Date().getFullYear()}
                    placeholder="YYYY"
                />
            </div>

            <div class="form-group">
                <label for="nepalApprovalStatus"
                    >Approval Status in Nepal <span class="required">*</span></label
                >
                <select
                    id="nepalApprovalStatus"
                    bind:value={harmfulMedicine.nepalApprovalStatus}
                    required
                >
                    <option value="Unknown">Unknown</option>
                    <option value="Approved">Still Approved</option>
                    <option value="Suspended">Approval Suspended</option>
                    <option value="Revoked">Approval Revoked</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Banned">Banned</option>
                </select>
            </div>
        </div>

        <div class="form-group full-width">
            <label for="activeIngredients"
                >Active Ingredient(s) <span class="required">*</span></label
            >
            <textarea
                id="activeIngredients"
                bind:value={harmfulMedicine.activeIngredients}
                rows="5"
                required
                placeholder="List all active pharmaceutical ingredients"
            ></textarea>
        </div>

        <div class="form-group full-width">
            <label for="harmfulChemicals"
                >Harmful Chemical(s) Detected <span class="required">*</span
                ></label
            >
            <textarea
                id="harmfulChemicals"
                bind:value={harmfulMedicine.harmfulChemicals}
                rows="5"
                required
                placeholder="List harmful chemicals found (e.g., carcinogens, heavy metals)"
            ></textarea>
        </div>

        <div class="form-group full-width">
            <label for="chemicalsSource"
                >Chemicals' Source <span class="required">*</span></label
            >
            <textarea
                id="chemicalsSource"
                bind:value={harmfulMedicine.chemicalsSource}
                rows="5"
                required
                placeholder="Describe the source of harmful chemicals (e.g., contamination, manufacturing error)"
            ></textarea>
        </div>

        <div class="form-group full-width">
            <label for="healthRisks"
                >Potential Health Risks <span class="required">*</span></label
            >
            <textarea
                id="healthRisks"
                bind:value={harmfulMedicine.healthRisks}
                rows="5"
                required
                placeholder="Describe potential health risks (e.g., cancer, organ damage)"
            ></textarea>
        </div>

        <div class="form-group full-width">
            <label for="authorityWarnings">Health Authority Warnings</label>
            <textarea
                id="authorityWarnings"
                bind:value={harmfulMedicine.authorityWarnings}
                rows="5"
                placeholder="List any warnings from WHO, FDA, or other health authorities"
            ></textarea>
        </div>

        <div class="form-group full-width">
            <label for="regulatoryAction"
                >Regulatory Action <span class="required">*</span></label
            >
            <textarea
                id="regulatoryAction"
                bind:value={harmfulMedicine.regulatoryAction}
                rows="5"
                required
                placeholder="Describe any recalls, bans, or warnings issued by health authorities"
            ></textarea>
        </div>

        <div class="form-group full-width">
            <label for="alternativeMedicines">Alternative Medicines</label>
            <textarea
                id="alternativeMedicines"
                bind:value={harmfulMedicine.alternativeMedicines}
                rows="5"
                placeholder="List safer, approved alternatives to this medicine"
            ></textarea>
        </div>

        <div class="button-group">
            <button type="reset">Clear Form</button>
            <button type="submit">Submit Report</button>
        </div>
    </form>
</div>
