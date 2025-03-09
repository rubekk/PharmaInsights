<script>
  let currentForm = 'discontinued'; // 'discontinued', 'banned', or 'harmful'
  
  // Form data objects
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
    sourceInfo: '',
    dateReported: '',
    evidence: '',
    manufacturerAddress: '',
    contactInformation: '',
    alternativeMedicines: '',
    lastKnownPrice: '',
    stockAvailability: '',
    safetyRecords: '',
    patentStatus: '',
    importStatus: '',
    comments: ''
  };

  let bannedMedicine = {
    medicineName: '',
    brandName: '',
    activeIngredients: '',
    countryOfOrigin: '',
    bannedCountries: '',
    banReason: '',
    nepalApprovalStatus: '',
    licenseNumber: '',
    banYear: '',
    alternatives: '',
    sourceInfo: '',
    dateReported: '',
    evidence: '',
    dosageForm: '',
    strength: '',
    therapeuticCategory: '',
    banningAuthority: '',
    scientificEvidence: '',
    safetyStudies: '',
    marketingStatus: '',
    importStatus: '',
    comments: ''
  };

  let harmfulMedicine = {
    medicineName: '',
    brandName: '',
    activeIngredients: '',
    harmfulChemicals: '',
    chemicalSource: '',
    healthRisks: '',
    authorityWarnings: '',
    yearDetected: '',
    regulatoryAction: '',
    manufacturerName: '',
    countryOfOrigin: '',
    nepalApprovalStatus: '',
    alternatives: '',
    sourceInfo: '',
    dateReported: '',
    evidence: '',
    dosageForm: '',
    strength: '',
    batchesAffected: '',
    testingLaboratory: '',
    recallStatus: '',
    disposalMethod: '',
    compensationStatus: '',
    legalAction: '',
    comments: ''
  };

  const handleSubmit = (formType) => {
    let formData;
    switch(formType) {
      case 'discontinued':
        formData = discontinuedMedicine;
        break;
      case 'banned':
        formData = bannedMedicine;
        break;
      case 'harmful':
        formData = harmfulMedicine;
        break;
    }
    console.log('Form submitted:', formData);
    // Handle form submission here
  };
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
</svelte:head>

<main>
  <h1>Medicine Information System</h1>
  
  <div class="form-selector">
    <button 
      class:active={currentForm === 'discontinued'}
      on:click={() => currentForm = 'discontinued'}>
      Discontinued Medicines
    </button>
    <button 
      class:active={currentForm === 'banned'}
      on:click={() => currentForm = 'banned'}>
      Banned Medicines
    </button>
    <button 
      class:active={currentForm === 'harmful'}
      on:click={() => currentForm = 'harmful'}>
      Harmful Medicines
    </button>
  </div>

  {#if currentForm === 'discontinued'}
    <form on:submit|preventDefault={() => handleSubmit('discontinued')}>
      <h2>Discontinued Medicines Form</h2>
      
      <div class="form-grid">
        <div class="form-group">
          <label for="medicineName">Medicine Name *</label>
          <input type="text" id="medicineName" bind:value={discontinuedMedicine.medicineName} required>
        </div>

        <div class="form-group">
          <label for="brandName">Brand Name</label>
          <input type="text" id="brandName" bind:value={discontinuedMedicine.brandName}>
        </div>

        <div class="form-group">
          <label for="companyStatus">Company Status *</label>
          <select id="companyStatus" bind:value={discontinuedMedicine.companyStatus} required>
            <option value="Active">Active</option>
            <option value="Shut Down">Shut Down</option>
            <option value="Merged">Merged</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>

        <div class="form-group">
          <label for="shutdownDate">Date of Company Shutdown</label>
          <input type="date" id="shutdownDate" bind:value={discontinuedMedicine.shutdownDate}>
        </div>

        <div class="form-group">
          <label for="lastKnownPrice">Last Known Price</label>
          <input type="text" id="lastKnownPrice" bind:value={discontinuedMedicine.lastKnownPrice}>
        </div>
      </div>

      <div class="form-section">
        <h3>Additional Information</h3>
        <div class="form-group">
          <label for="comments">Comments</label>
          <textarea id="comments" bind:value={discontinuedMedicine.comments}></textarea>
        </div>
      </div>

      <div class="button-group">
        <button type="reset" class="secondary">Reset</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  {/if}

  {#if currentForm === 'banned'}
    <form on:submit|preventDefault={() => handleSubmit('banned')}>
      <h2>Banned Medicines Form</h2>
      
      <div class="form-grid">
        <div class="form-group">
          <label for="medicineName">Medicine Name *</label>
          <input type="text" id="medicineName" bind:value={bannedMedicine.medicineName} required>
        </div>

        <div class="form-group">
          <label for="activeIngredients">Active Ingredients *</label>
          <textarea id="activeIngredients" bind:value={bannedMedicine.activeIngredients} required></textarea>
        </div>

        <div class="form-group">
          <label for="bannedCountries">Banned Countries *</label>
          <textarea id="bannedCountries" bind:value={bannedMedicine.bannedCountries} required></textarea>
        </div>

        <div class="form-group">
          <label for="banReason">Reason for Ban *</label>
          <textarea id="banReason" bind:value={bannedMedicine.banReason} required></textarea>
        </div>

        <div class="form-group">
          <label for="dosageForm">Dosage Form</label>
          <input type="text" id="dosageForm" bind:value={bannedMedicine.dosageForm}>
        </div>

        <div class="form-group">
          <label for="strength">Strength</label>
          <input type="text" id="strength" bind:value={bannedMedicine.strength}>
        </div>

        <div class="form-group">
          <label for="therapeuticCategory">Therapeutic Category</label>
          <input type="text" id="therapeuticCategory" bind:value={bannedMedicine.therapeuticCategory}>
        </div>

        <div class="form-group">
          <label for="banningAuthority">Banning Authority</label>
          <input type="text" id="banningAuthority" bind:value={bannedMedicine.banningAuthority}>
        </div>

        <div class="form-group">
          <label for="scientificEvidence">Scientific Evidence</label>
          <textarea id="scientificEvidence" bind:value={bannedMedicine.scientificEvidence}></textarea>
        </div>

        <div class="form-group">
          <label for="safetyStudies">Safety Studies</label>
          <textarea id="safetyStudies" bind:value={bannedMedicine.safetyStudies}></textarea>
        </div>

        <div class="form-group">
          <label for="marketingStatus">Marketing Status</label>
          <input type="text" id="marketingStatus" bind:value={bannedMedicine.marketingStatus}>
        </div>
      </div>

      <div class="button-group">
        <button type="reset" class="secondary">Reset</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  {/if}

  {#if currentForm === 'harmful'}
    <form on:submit|preventDefault={() => handleSubmit('harmful')}>
      <h2>Harmful Medicines Form</h2>
      
      <div class="form-grid">
        <div class="form-group">
          <label for="medicineName">Medicine Name *</label>
          <input type="text" id="medicineName" bind:value={harmfulMedicine.medicineName} required>
        </div>

        <div class="form-group">
          <label for="harmfulChemicals">Harmful Chemicals Detected *</label>
          <textarea id="harmfulChemicals" bind:value={harmfulMedicine.harmfulChemicals} required></textarea>
        </div>

        <div class="form-group">
          <label for="healthRisks">Potential Health Risks *</label>
          <textarea id="healthRisks" bind:value={harmfulMedicine.healthRisks} required></textarea>
        </div>

        <div class="form-group">
          <label for="regulatoryAction">Regulatory Action</label>
          <textarea id="regulatoryAction" bind:value={harmfulMedicine.regulatoryAction}></textarea>
        </div>

        <div class="form-group">
          <label for="dosageForm">Dosage Form</label>
          <input type="text" id="dosageForm" bind:value={harmfulMedicine.dosageForm}>
        </div>

        <div class="form-group">
          <label for="strength">Strength</label>
          <input type="text" id="strength" bind:value={harmfulMedicine.strength}>
        </div>

        <div class="form-group">
          <label for="batchesAffected">Batches Affected</label>
          <input type="text" id="batchesAffected" bind:value={harmfulMedicine.batchesAffected}>
        </div>

        <div class="form-group">
          <label for="testingLaboratory">Testing Laboratory</label>
          <input type="text" id="testingLaboratory" bind:value={harmfulMedicine.testingLaboratory}>
        </div>

        <div class="form-group">
          <label for="recallStatus">Recall Status</label>
          <input type="text" id="recallStatus" bind:value={harmfulMedicine.recallStatus}>
        </div>

        <div class="form-group">
          <label for="disposalMethod">Disposal Method</label>
          <textarea id="disposalMethod" bind:value={harmfulMedicine.disposalMethod}></textarea>
        </div>

        <div class="form-group">
          <label for="compensationStatus">Compensation Status</label>
          <input type="text" id="compensationStatus" bind:value={harmfulMedicine.compensationStatus}>
        </div>

        <div class="form-group">
          <label for="legalAction">Legal Action</label>
          <textarea id="legalAction" bind:value={harmfulMedicine.legalAction}></textarea>
        </div>
      </div>

      <div class="button-group">
        <button type="reset" class="secondary">Reset</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  {/if}
</main>

<style>
  :global(body) {
    font-family: 'Poppins', sans-serif;
    background-color: #f5f7fa;
    color: #2d3748;
    line-height: 1.6;
  }

  main {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 2rem;
  }

  h1 {
    text-align: center;
    color: #2d3748;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-weight: 600;
  }

  h2 {
    color: #4a5568;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  h3 {
    color: #4a5568;
    font-size: 1.4rem;
    margin: 1rem 0;
    font-weight: 500;
  }

  .form-selector {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .form-selector button {
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background-color: #edf2f7;
    color: #4a5568;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .form-selector button.active {
    background-color: #4299e1;
    color: white;
    box-shadow: 0 4px 6px rgba(66, 153, 225, 0.2);
  }

  form {
    background-color: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
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
    font-weight: 500;
    color: #4a5568;
  }

  input, select, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    font-family: 'Poppins', sans-serif;
  }

  input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
  }

  textarea {
    height: 120px;
    resize: vertical;
  }

  .form-section {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 2px solid #e2e8f0;
  }

  .button-group {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    margin-top: 2rem;
  }

  button {
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  button[type="submit"] {
    background-color: #48bb78;
    color: white;
  }

  button[type="submit"]:hover {
    background-color: #38a169;
    transform: translateY(-1px);
  }

  button.secondary {
    background-color: #e2e8f0;
    color: #4a5568;
  }

  button.secondary:hover {
    background-color: #cbd5e0;
  }

  @media (max-width: 768px) {
    main {
      padding: 1rem;
    }

    .form-selector {
      flex-direction: column;
    }

    .form-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
