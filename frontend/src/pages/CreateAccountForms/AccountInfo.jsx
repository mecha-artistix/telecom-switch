function AccountInfo() {
  return (
    <div className="form-section">
      <h2>Account Information</h2>
      <div className="form-row">
        <label htmlFor="">Account Name</label>
        <input type="text" placeholder="Account Name" />
      </div>
      <div className="form-row">
        <label htmlFor="">Customer Name</label>
        <input className="" />
      </div>
      <div className="form-row">
        <label htmlFor="">Account ID</label>
        <input className="" />
      </div>
      <div className="form-row">
        <label htmlFor="">Status</label>
        <select className="">
          <option>Enable</option>
          <option>Disable</option>
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="">Account Group</label>
        <select className="">
          <option>SD Dialer</option>
          <option>AD Dialer</option>
          <option>DS Dialer</option>
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="">Session Limit</label>
        <input type="text" />
      </div>
      <div className="form-row">
        <label htmlFor="">International</label>
        <input type="checkbox" />
      </div>
      <div className="form-row">
        <label htmlFor="">Date Added</label>
        <input type="date"></input>
      </div>
      <div className="form-row">
        <label htmlFor="">Balance</label>
        <input type="number" min="1" step="any" />
      </div>
      <div className="form-row">
        <label htmlFor="">Block Matching SRC/DST</label>
        <input type="checkbox" />
      </div>
      <div className="form-row">
        <label htmlFor="">Attestation Blocking</label>
        <select>
          <option>Filtering Disabled</option>
          <option>Filtering Disabled</option>
          <option>Filtering Disabled</option>
        </select>
      </div>
    </div>
  );
}

export default AccountInfo;
