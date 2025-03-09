<script>
    // Form data object for harmful medicines
    let harmfulMedicine = {
        medicineName: '',
        brandName: '',
        activeIngredients: '',
        harmfulChemicals: '',
        chemicalsSource: '',
        healthRisks: '',
        authorityWarnings: '',
        yearDetected: '',
        regulatoryAction: '',
        manufacturerName: '',
        countryOfOrigin: '',
        nepalApprovalStatus: 'Unknown',
        alternativeMedicines: ''
    };

    const handleSubmit = () => {
        console.log('Form submitted:', harmfulMedicine);
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
        background-color: #e53e3e;  /* Red color for harmful medicines form */
        color: white;
    }

    button[type="submit"]:hover {
        background-color: #c53030;
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

    .warning-icon {
        color: #e53e3e;
        margin-right: 0.5rem;
    }
</style>

<div class="form-container">
    <form on:submit|preventDefault={handleSubmit}>
        <h2>⚠️ Harmful Medicine Report</h2>
        
        <div class="form-grid">
            <div class="form-group">
                <label for="medicineName">Medicine Name <span class="required">*</span></label>
                <input 
                    type="text" 
                    id="medicineName" 
                    bind:value={harmfulMedicine.medicineName} 
                    required
                    placeholder="Enter medicine name"
                >
            </div>

            <div class="form-group">
                <label for="brandName">Brand Name</label>
                <input 
                    type="text" 
                    id="brandName" 
                    bind:value={harmfulMedicine.brandName}
                    placeholder="Enter brand name if applicable"
                >
            </div>

            <div class="form-group full-width">
                <label for="activeIngredients">Active Ingredient(s) <span class="required">*</span></label>
                <textarea 
                    id="activeIngredients" 
                    bind:value={harmfulMedicine.activeIngredients}
                    required
                    placeholder="List all active pharmaceutical ingredients"
                ></textarea>
            </div>

            <div class="form-group full-width">
                <label for="harmfulChemicals">Harmful Chemical(s) Detected <span class="required">*</span></label>
                <textarea 
                    id="harmfulChemicals" 
                    bind:value={harmfulMedicine.harmfulChemicals}
                    required
                    placeholder="List harmful chemicals found (e.g., carcinogens, heavy metals)"
                ></textarea>
            </div>

            <div class="form-group full-width">
                <label for="chemicalsSource">Chemicals' Source <span class="required">*</span></label>
                <textarea 
                    id="chemicalsSource" 
                    bind:value={harmfulMedicine.chemicalsSource}
                    required
                    placeholder="Describe the source of harmful chemicals (e.g., contamination, manufacturing error)"
                ></textarea>
            </div>

            <div class="form-group full-width">
                <label for="healthRisks">Potential Health Risks <span class="required">*</span></label>
                <textarea 
                    id="healthRisks" 
                    bind:value={harmfulMedicine.healthRisks}
                    required
                    placeholder="Describe potential health risks (e.g., cancer, organ damage)"
                ></textarea>
            </div>

            <div class="form-group full-width">
                <label for="authorityWarnings">Health Authority Warnings</label>
                <textarea 
                    id="authorityWarnings" 
                    bind:value={harmfulMedicine.authorityWarnings}
                    placeholder="List any warnings from WHO, FDA, or other health authorities"
                ></textarea>
            </div>

            <div class="form-group">
                <label for="yearDetected">Year Detected/Reported <span class="required">*</span></label>
                <input 
                    type="number" 
                    id="yearDetected" 
                    bind:value={harmfulMedicine.yearDetected}
                    required
                    min="1900"
                    max={new Date().getFullYear()}
                    placeholder="YYYY"
                >
            </div>

            <div class="form-group full-width">
                <label for="regulatoryAction">Regulatory Action <span class="required">*</span></label>
                <textarea 
                    id="regulatoryAction" 
                    bind:value={harmfulMedicine.regulatoryAction}
                    required
                    placeholder="Describe any recalls, bans, or warnings issued by health authorities"
                ></textarea>
            </div>

            <div class="form-group">
                <label for="manufacturerName">Manufacturing Company Name <span class="required">*</span></label>
                <input 
                    type="text" 
                    id="manufacturerName" 
                    bind:value={harmfulMedicine.manufacturerName}
                    required
                    placeholder="Enter manufacturer name"
                >
            </div>

            <div class="form-group">
                <label for="countryOfOrigin">Country of Origin <span class="required">*</span></label>
                <input 
                    type="text" 
                    id="countryOfOrigin" 
                    bind:value={harmfulMedicine.countryOfOrigin}
                    required
                    placeholder="Enter country of manufacture"
                >
            </div>

            <div class="form-group">
                <label for="nepalApprovalStatus">Approval Status in Nepal <span class="required">*</span></label>
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

            <div class="form-group full-width">
                <label for="alternativeMedicines">Alternative Medicines</label>
                <textarea 
                    id="alternativeMedicines" 
                    bind:value={harmfulMedicine.alternativeMedicines}
                    placeholder="List safer, approved alternatives to this medicine"
                ></textarea>
            </div>
        </div>

        <div class="button-group">
            <button type="reset">Clear Form</button>
            <button type="submit">Submit Report</button>
        </div>
    </form>
</div>
