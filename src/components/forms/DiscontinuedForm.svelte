<script>
    // Form data object with updated fields
    let discontinuedMedicine = {
        medicineName: '',
        brandName: '',
        manufacturerName: '',
        companyStatus: 'Active',
        shutdownDate: '',
        lastManufacturedYear: '',
        batchNumber: '',
        distributionAreas: '',
        certificationStatus: '',
        shutdownReason: '',
    };

    const handleSubmit = () => {
        console.log('Form submitted:', discontinuedMedicine);
        // Handle form submission here
    };
</script>

<style>
    .form-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
    }

    .form-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
        color: #4a5568;
    }

    input, select, textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #e2e8f0;
        border-radius: 0.375rem;
        background-color: white;
        font-size: 1rem;
        transition: border-color 0.2s ease;
    }

    input:focus, select:focus, textarea:focus {
        outline: none;
        border-color: #4299e1;
        box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
    }

    .button-group {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
        margin-top: 2rem;
    }

    button {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 0.375rem;
        font-size: 0.9rem;
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
        background-color: #e2e8f0;
        color: #4a5568;
    }

    button[type="reset"]:hover {
        background-color: #cbd5e0;
    }

    h2 {
        color: #2d3748;
        margin-bottom: 2rem;
        font-size: 1.5rem;
        font-weight: 600;
    }

    .required {
        color: #e53e3e;
        margin-left: 0.25rem;
    }
</style>

<div class="form-container">
    <form on:submit|preventDefault={handleSubmit}>
        <h2>Discontinued Medicine Report</h2>
        
        <div class="form-grid">
            <div class="form-group">
                <label for="medicineName">Medicine Name <span class="required">*</span></label>
                <input 
                    type="text" 
                    id="medicineName" 
                    bind:value={discontinuedMedicine.medicineName} 
                    required
                    placeholder="Enter medicine name"
                >
            </div>

            <div class="form-group">
                <label for="brandName">Brand Name</label>
                <input 
                    type="text" 
                    id="brandName" 
                    bind:value={discontinuedMedicine.brandName}
                    placeholder="Enter brand name if any"
                >
            </div>

            <div class="form-group">
                <label for="manufacturerName">Manufacturer/Company Name <span class="required">*</span></label>
                <input 
                    type="text" 
                    id="manufacturerName" 
                    bind:value={discontinuedMedicine.manufacturerName}
                    required
                    placeholder="Enter manufacturer name"
                >
            </div>

            <div class="form-group">
                <label for="companyStatus">Company Status <span class="required">*</span></label>
                <select 
                    id="companyStatus" 
                    bind:value={discontinuedMedicine.companyStatus}
                    required
                >
                    <option value="Active">Active</option>
                    <option value="Shut Down">Shut Down</option>
                    <option value="Merged">Merged</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </div>

            <div class="form-group">
                <label for="shutdownDate">Date of Company Shutdown</label>
                <input 
                    type="date" 
                    id="shutdownDate" 
                    bind:value={discontinuedMedicine.shutdownDate}
                >
            </div>

            <div class="form-group">
                <label for="lastManufacturedYear">Last Known Manufacturing Year <span class="required">*</span></label>
                <input 
                    type="number" 
                    id="lastManufacturedYear" 
                    bind:value={discontinuedMedicine.lastManufacturedYear}
                    required
                    min="1900"
                    max={new Date().getFullYear()}
                    placeholder="YYYY"
                >
            </div>

            <div class="form-group">
                <label for="batchNumber">Batch Number</label>
                <input 
                    type="text" 
                    id="batchNumber" 
                    bind:value={discontinuedMedicine.batchNumber}
                    placeholder="Enter last known batch number"
                >
            </div>

            <div class="form-group">
                <label for="distributionAreas">Distribution Areas <span class="required">*</span></label>
                <input 
                    type="text" 
                    id="distributionAreas" 
                    bind:value={discontinuedMedicine.distributionAreas}
                    required
                    placeholder="Enter countries/regions"
                >
            </div>

            <div class="form-group">
                <label for="certificationStatus">Certification/Approval Status <span class="required">*</span></label>
                <select 
                    id="certificationStatus" 
                    bind:value={discontinuedMedicine.certificationStatus}
                    required
                >
                    <option value="">Select status</option>
                    <option value="FDA Approved">FDA Approved</option>
                    <option value="WHO Approved">WHO Approved</option>
                    <option value="Other Authority">Other Authority</option>
                    <option value="Not Approved">Not Approved</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </div>

            <div class="form-group">
                <label for="shutdownReason">Reason for Shutdown</label>
                <textarea 
                    id="shutdownReason" 
                    bind:value={discontinuedMedicine.shutdownReason}
                    rows="3"
                    placeholder="Enter known reasons for discontinuation"
                ></textarea>
            </div>
        </div>

        <div class="button-group">
            <button type="reset">Clear Form</button>
            <button type="submit">Submit Report</button>
        </div>
    </form>
</div>