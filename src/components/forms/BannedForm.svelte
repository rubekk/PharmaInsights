<script>
    // Form data object for banned medicines
    let bannedMedicine = {
        medicineName: '',
        brandName: '',
        activeIngredients: '',
        countryOfOrigin: '',
        bannedCountries: '',
        banReason: '',
        nepalApprovalStatus: 'Unknown',
        manufacturingLicense: '',
        yearOfBan: '',
        alternativeMedicine: ''
    };

    const handleSubmit = () => {
        console.log('Form submitted:', bannedMedicine);
        // Handle form submission here
    };
</script>

<style>
    .form-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .form-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-group.full-width {
        grid-column: 1 / -1;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
        color: #4a5568;
        font-weight: 500;
    }

    input, select, textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #e2e8f0;
        border-radius: 0.375rem;
        background-color: white;
        font-size: 1rem;
        transition: all 0.2s ease;
    }

    input:focus, select:focus, textarea:focus {
        outline: none;
        border-color: #4299e1;
        box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
    }

    textarea {
        min-height: 100px;
        resize: vertical;
    }

    .button-group {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 1px solid #e2e8f0;
    }

    button {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 0.375rem;
        font-size: 0.9rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    button[type="submit"] {
        background-color: #4299e1;
        color: white;
    }

    button[type="submit"]:hover {
        background-color: #3182ce;
    }

    button[type="reset"] {
        background-color: #f7fafc;
        color: #4a5568;
        border: 1px solid #e2e8f0;
    }

    button[type="reset"]:hover {
        background-color: #edf2f7;
    }

    h2 {
        color: #2d3748;
        margin-bottom: 2rem;
        font-size: 1.5rem;
        font-weight: 600;
        text-align: center;
    }

    .required {
        color: #e53e3e;
        margin-left: 0.25rem;
    }

    .helper-text {
        font-size: 0.8rem;
        color: #718096;
        margin-top: 0.25rem;
    }
</style>

<div class="form-container">
    <form on:submit|preventDefault={handleSubmit}>
        <h2>Banned Medicine Report</h2>
        
        <div class="form-grid">
            <div class="form-group">
                <label for="medicineName">Medicine Name <span class="required">*</span></label>
                <input 
                    type="text" 
                    id="medicineName" 
                    bind:value={bannedMedicine.medicineName} 
                    required
                    placeholder="Enter medicine name"
                >
            </div>

            <div class="form-group">
                <label for="brandName">Brand Name</label>
                <input 
                    type="text" 
                    id="brandName" 
                    bind:value={bannedMedicine.brandName}
                    placeholder="Enter brand name if applicable"
                >
            </div>

            <div class="form-group full-width">
                <label for="activeIngredients">Active Ingredient(s) <span class="required">*</span></label>
                <textarea 
                    id="activeIngredients" 
                    bind:value={bannedMedicine.activeIngredients}
                    required
                    placeholder="List all active pharmaceutical ingredients"
                ></textarea>
            </div>

            <div class="form-group">
                <label for="countryOfOrigin">Country of Origin <span class="required">*</span></label>
                <input 
                    type="text" 
                    id="countryOfOrigin" 
                    bind:value={bannedMedicine.countryOfOrigin}
                    required
                    placeholder="Enter country of manufacture"
                >
            </div>

            <div class="form-group full-width">
                <label for="bannedCountries">Banned Countries <span class="required">*</span></label>
                <textarea 
                    id="bannedCountries" 
                    bind:value={bannedMedicine.bannedCountries}
                    required
                    placeholder="List countries where this medicine is banned"
                ></textarea>
            </div>

            <div class="form-group full-width">
                <label for="banReason">Reason for Ban <span class="required">*</span></label>
                <textarea 
                    id="banReason" 
                    bind:value={bannedMedicine.banReason}
                    required
                    placeholder="Describe safety concerns, efficacy issues, side effects, etc."
                ></textarea>
            </div>

            <div class="form-group">
                <label for="nepalApprovalStatus">Approval Status in Nepal <span class="required">*</span></label>
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

            <div class="form-group">
                <label for="manufacturingLicense">Manufacturing License/Approval Number</label>
                <input 
                    type="text" 
                    id="manufacturingLicense" 
                    bind:value={bannedMedicine.manufacturingLicense}
                    placeholder="Enter license/approval number if applicable"
                >
                <div class="helper-text">Nepal DDA registration number if available</div>
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
                >
            </div>

            <div class="form-group full-width">
                <label for="alternativeMedicine">Alternative Medicine in Banned Countries</label>
                <textarea 
                    id="alternativeMedicine" 
                    bind:value={bannedMedicine.alternativeMedicine}
                    placeholder="List approved alternatives in countries where this medicine is banned"
                ></textarea>
            </div>
        </div>

        <div class="button-group">
            <button type="reset">Clear Form</button>
            <button type="submit">Submit Report</button>
        </div>
    </form>
</div>
