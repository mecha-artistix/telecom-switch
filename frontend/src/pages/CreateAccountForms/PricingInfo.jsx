function PricingInfo() {
  return (
    <div className="form-section">
      <h2>Pricing Information</h2>
      <div className="form-row">
        <label htmlFor="">Current Rate Deck</label>
        <input type="file" accept=".csv, .xls, .xlsx" />
      </div>
      <div className="form-row">
        <label htmlFor="">Billing Type</label>
        <select type="select">
          <option>LRN</option>
          <option>ARN</option>
          <option>VRN</option>
          <option>ZRN</option>
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="">Billing Increment</label>
        <div>
          <span className="mx-1">
            <label>Initial</label>
            <select>
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
            </select>
          </span>
          <span className="mx-1">
            <label>Subsequent</label>
            <select>
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
            </select>
          </span>
        </div>
      </div>
      <div className="form-row">
        <label htmlFor="">Price Cap</label>
        <input type="text" />
      </div>
      <div className="form-row">
        <label htmlFor="">Price Protection</label>
        <input type="checkbox" />
      </div>
      <div className="form-row">
        <label htmlFor="">Digits Used</label>
        <select>
          <option></option>
          <option></option>
          <option></option>
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="">Rounding Method</label>
        <select>
          <option></option>
          <option></option>
          <option></option>
        </select>
      </div>
    </div>
  );
}

export default PricingInfo;
