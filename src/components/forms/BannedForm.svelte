<script>
    let bannedMedicine = {
        medicineName: "",
        brandName: "",
        activeIngredients: "",
        countryOfOrigin: "",
        bannedCountries: "",
        banReason: "",
        nepalApprovalStatus: "Unknown",
        manufacturingLicense: "",
        yearOfBan: "",
        alternativeMedicine: "",
    };

    const handleSubmit = () => {
        console.log("Form submitted:", bannedMedicine);
        // Handle form submission here
    };
</script>

<div class="form-container">
    <form on:submit|preventDefault={handleSubmit}>
        <h2 class="form-title">Banned Medicine Report</h2>

        <div class="form-row">
            <div class="form-group">
                <label for="medicineName"
                    >Medicine Name <span class="required">*</span></label
                >
                <input
                    type="text"
                    id="medicineName"
                    bind:value={bannedMedicine.medicineName}
                    required
                    placeholder="Enter medicine name"
                />
            </div>

            <div class="form-group">
                <label for="brandName">Brand Name</label>
                <input
                    type="text"
                    id="brandName"
                    bind:value={bannedMedicine.brandName}
                    placeholder="Enter brand name if applicable"
                />
            </div>
        </div>

        <div class="form-row">
            <div class="form-group">
                <label for="countryOfOrigin"
                    >Country of Origin <span class="required">*</span></label
                >
                <input
                    type="text"
                    id="countryOfOrigin"
                    bind:value={bannedMedicine.countryOfOrigin}
                    required
                    placeholder="Enter country of manufacture"
                />
            </div>

            <div class="form-group">
                <label for="nepalApprovalStatus"
                    >Approval Status in Nepal <span class="required">*</span
                    ></label
                >
                <select
                    id="nepalApprovalStatus"
                    bind:value={bannedMedicine.nepalApprovalStatus}
                    required
                >
                    <option value="Unknown">Unknown</option>
                    <option value="Approved">Approved</option>
                    <option value="Not Approved">Not Approved</option>
                    <option value="Pending">Pending Approval</option>
                    <option value="Banned">Banned</option>
                </select>
            </div>
        </div>

        <div class="form-row">
            <div class="form-group">
                <label for="manufacturingLicense"
                    >Manufacturing License/Approval Number</label
                >
                <input
                    type="text"
                    id="manufacturingLicense"
                    bind:value={bannedMedicine.manufacturingLicense}
                    placeholder="Enter license/approval number if applicable"
                />
                <div class="helper-text">
                    Nepal DDA registration number if available
                </div>
            </div>

            <div class="form-group">
                <label for="yearOfBan">Year of Ban</label>
                <input
                    type="number"
                    id="yearOfBan"
                    bind:value={bannedMedicine.yearOfBan}
                    min="1900"
                    max={new Date().getFullYear()}
                    placeholder="YYYY"
                />
            </div>
        </div>

        <div class="form-group full-width">
            <label for="activeIngredients"
                >Active Ingredient(s) <span class="required">*</span></label
            >
            <textarea
                id="activeIngredients"
                bind:value={bannedMedicine.activeIngredients}
                required
                placeholder="List all active pharmaceutical ingredients"
            ></textarea>
        </div>

        <div class="form-group full-width">
            <label for="bannedCountries"
                >Banned Countries <span class="required">*</span></label
            >
            <textarea
                id="bannedCountries"
                bind:value={bannedMedicine.bannedCountries}
                required
                placeholder="List countries where this medicine is banned"
            ></textarea>
        </div>

        <div class="form-group full-width">
            <label for="banReason"
                >Reason for Ban <span class="required">*</span></label
            >
            <textarea
                id="banReason"
                bind:value={bannedMedicine.banReason}
                required
                placeholder="Describe safety concerns, efficacy issues, side effects, etc."
            ></textarea>
        </div>

        <div class="form-group full-width">
            <label for="alternativeMedicine"
                >Alternative Medicine in Banned Countries</label
            >
            <textarea
                id="alternativeMedicine"
                bind:value={bannedMedicine.alternativeMedicine}
                placeholder="List approved alternatives in countries where this medicine is banned"
            ></textarea>
        </div>

        <div class="button-group">
            <button type="reset">Clear Form</button>
            <button type="submit">Submit Report</button>
        </div>
    </form>
</div>
