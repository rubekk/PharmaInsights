<script>
    let discontinuedMedicine = {
        medicineName: "",
        brandName: "",
        manufacturerName: "",
        companyStatus: "Active",
        shutdownDate: "",
        lastManufacturedYear: "",
        batchNumber: "",
        distributionAreas: "",
        certificationStatus: "",
        shutdownReason: "",
    };

    const handleSubmit = () => {
        console.log("Form submitted:", discontinuedMedicine);
        // Handle form submission here
    };
</script>

<div class="form-container">
    <form on:submit|preventDefault={handleSubmit}>
        <h2 class="form-title">Discontinued Medicine Report</h2>

        <div class="form-container">
            <div class="form-row">
                <div class="form-group">
                    <label for="medicineName"
                        >Medicine Name <span class="required">*</span></label
                    >
                    <input
                        type="text"
                        id="medicineName"
                        bind:value={discontinuedMedicine.medicineName}
                        required
                        placeholder="Enter medicine name"
                    />
                </div>

                <div class="form-group">
                    <label for="brandName">Brand Name</label>
                    <input
                        type="text"
                        id="brandName"
                        bind:value={discontinuedMedicine.brandName}
                        placeholder="Enter brand name if any"
                    />
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="manufacturerName"
                        >Manufacturer/Company Name <span class="required"
                            >*</span
                        ></label
                    >
                    <input
                        type="text"
                        id="manufacturerName"
                        bind:value={discontinuedMedicine.manufacturerName}
                        required
                        placeholder="Enter manufacturer name"
                    />
                </div>

                <div class="form-group">
                    <label for="companyStatus"
                        >Company Status <span class="required">*</span></label
                    >
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
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="shutdownDate">Date of Company Shutdown</label>
                    <input
                        type="date"
                        id="shutdownDate"
                        bind:value={discontinuedMedicine.shutdownDate}
                    />
                </div>

                <div class="form-group">
                    <label for="lastManufacturedYear"
                        >Last Known Manufacturing Year <span class="required"
                            >*</span
                        ></label
                    >
                    <input
                        type="number"
                        id="lastManufacturedYear"
                        bind:value={discontinuedMedicine.lastManufacturedYear}
                        required
                        min="1900"
                        max={new Date().getFullYear()}
                        placeholder="YYYY"
                    />
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="batchNumber">Batch Number</label>
                    <input
                        type="text"
                        id="batchNumber"
                        bind:value={discontinuedMedicine.batchNumber}
                        placeholder="Enter last known batch number"
                    />
                </div>

                <div class="form-group">
                    <label for="certificationStatus"
                        >Certification/Approval Status <span class="required"
                            >*</span
                        ></label
                    >
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
            </div>

            <div class="form-group">
                <label for="distributionAreas"
                    >Distribution Areas <span class="required">*</span></label
                >
                <input
                    type="text"
                    id="distributionAreas"
                    bind:value={discontinuedMedicine.distributionAreas}
                    required
                    placeholder="Enter countries/regions"
                />
            </div>

            <div class="form-group">
                <label for="shutdownReason">Reason for Shutdown</label>
                <textarea
                    id="shutdownReason"
                    bind:value={discontinuedMedicine.shutdownReason}
                    rows="5"
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
