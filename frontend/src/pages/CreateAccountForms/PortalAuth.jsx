function PortalAuth() {
  return (
    <div className="form-section">
      <h2>Portal Authentication</h2>
      <div className="form-row">
        <label htmlFor="">Username</label>
        <input type="text" className="" />
      </div>
      <div className="form-row">
        <label htmlFor="">Password</label>
        <input type="password" />
      </div>
      <div className="form-row">
        <label htmlFor="">Re-type Password</label>
        <input type="password" />
      </div>
    </div>
  );
}

export default PortalAuth;
