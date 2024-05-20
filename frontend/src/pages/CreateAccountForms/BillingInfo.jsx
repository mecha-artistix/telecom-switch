function BillingInfo() {
  return (
    <div className="form-section">
      <h2>Billing Information</h2>
      <div className="form-row">
        <label htmlFor="">Email for Invoices</label>
        <input type="email" />
      </div>
      <div className="form-row">
        <label htmlFor="">Low Limit</label>
        <input type="text" />
      </div>
      <div className="form-row">
        <label htmlFor="">Suspend Limit</label>
        <input type="text" />
      </div>
      <div className="form-row">
        <label htmlFor="">Do not send confirmation email</label>
        <input type="checkbox" />
      </div>
      <div className="form-row">
        <label htmlFor="">Daily Balance Email</label>
        <input type="checkbox" />
      </div>
      <div className="form-row">
        <label htmlFor="">Do not send $0 Invoice</label>
        <input type="checkbox" />
      </div>
    </div>
  );
}

export default BillingInfo;
