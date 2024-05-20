import { Routes, Route } from "react-router-dom";
import { navigation } from "../assets/StaticData";
import PageTitle from "../contexts/PageTitle";
import AccountOverview from "../pages/AccountOverview";
import AccountDashboard from "../pages/AccountDashboard";
import AccountHosts from "../pages/AccountHosts";
import Accounting from "../pages/Accounting";
import AccountRateDeck from "../pages/AccountRateDeck";
import Admin from "../pages/Admin";
import Agents from "../pages/Agents";
import Billing from "../pages/Billing";
import Carriers from "../pages/Carriers";
import InputValue from "../pages/InputValue";
import Logout from "../pages/Logout";
import Reporting from "../pages/Reporting";
import Routing from "../pages/Routing";
import SuspendLimits from "../pages/SuspendLimits";
import Login from "../pages/Login";
import AccountNew from "../pages/AccountNew";

function Dashboard() {
  return (
    <section className="flex-grow overflow-x-auto px-10 py-10">
      <div className="my-5">
        <h2 className="text-4xl font-bold">
          <PageTitle />
        </h2>
      </div>
      <div>
        <Routes>
          <Route index element={<AccountOverview />} />;
          <Route path="account-dashboard" element={<AccountDashboard />} />;
          <Route path="accounting" element={<Accounting />} />;
          <Route path="account-rate-deck" element={<AccountRateDeck />} />;
          <Route path="account-hosts" element={<AccountHosts />} />;
          <Route path="suspend-limits" element={<SuspendLimits />} />;
          <Route path="input-value" element={<InputValue />} />;
          <Route path="carriers" element={<Carriers />} />;
          <Route path="routing" element={<Routing />} />;
          <Route path="agents" element={<Agents />} />;
          <Route path="billing" element={<Billing />} />;
          <Route path="reporting" element={<Reporting />} />;
          <Route path="admin" element={<Admin />} />;
          <Route path="new-account" element={<AccountNew />} />
        </Routes>
      </div>
    </section>
  );
}

export default Dashboard;
