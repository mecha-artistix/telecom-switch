function CompanyInfo() {
  return (
    <div className="form-section">
      <h2>Company Information</h2>
      <div className="form-row">
        <label htmlFor="">Legal Name of Company</label>
        <input type="text" className="" placeholder="Legal Name" />
      </div>
      <div className="form-row">
        <label htmlFor="">Email Address - Notices</label>
        <input type="email" />
      </div>
      <div className="form-row">
        <label htmlFor="">Email Address - Balanaces</label>
        <input type="email" />
      </div>
      <div className="form-row">
        <label htmlFor="">Email Address - Trouble Ticket</label>
        <input type="email" />
      </div>
      <div className="form-row">
        <label htmlFor="">Switch Make and Model</label>
        <input type="checkbox" />
      </div>
      <div className="form-row">
        <label htmlFor="">Show Block CID on Portal</label>
        <input type="checkbox" />
      </div>
      <div className="form-row">
        <label htmlFor="">Show CDR Search on Portal</label>
        <input type="checkbox" />
      </div>
      <div className="form-row">
        <label htmlFor="">Show Trace Columns</label>
        <input type="checkbox" />
      </div>
      <div className="form-row">
        <label htmlFor="">Hide Technical Info</label>
        <input type="checkbox" />
      </div>
      <div className="form-row">
        <label htmlFor="">Hide CDRs</label>
        <input type="checkbox" />
      </div>
    </div>
  );
}

export default CompanyInfo;
