import AccountInfo from "./CreateAccountForms/AccountInfo";
import BillingInfo from "./CreateAccountForms/BillingInfo";
import CompanyInfo from "./CreateAccountForms/CompanyInfo";
import PortalAuth from "./CreateAccountForms/PortalAuth";
import PricingInfo from "./CreateAccountForms/PricingInfo";

function AccountNew() {
  return (
    <section className="">
      {/* <form className="flex flex-row flex-wrap items-start gap-4"> */}
      <form className="grid auto-rows-min grid-cols-2 gap-4">
        <AccountInfo />
        <PortalAuth />
        <CompanyInfo />
        <PricingInfo />
        <BillingInfo />
        <div className="w-full grid-cols-2">
          <button type="submit" className="k_btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default AccountNew;
