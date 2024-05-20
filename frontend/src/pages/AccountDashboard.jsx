import { useState } from "react";
import FakeTable from "../assets/FakeTable.json";
import Table from "../components/Table";
import Popup from "../components/Popup";
import { Link } from "react-router-dom";
function AccountDashboard() {
  const [isActive, setIsActive] = useState(false);
  const newRecordHandler = () => {
    console.log("click");
    setIsActive((isActive) => (isActive = !isActive));
  };
  const createNewRecordHandler = () => {
    console.log("createNewRecordHandler");
  };
  const addExistingHandler = () => {
    console.log("addExistingHandler");
  };
  return (
    <>
      <div>
        <button onClick={newRecordHandler} className="btn-sm">
          New Record
        </button>
        <Popup state={isActive}>
          <div className="absolute z-10 w-60 border bg-slate-50 p-7">
            <div className="my-4 flex size-full items-end justify-between">
              <Link
                to="/new-account"
                className="btn-sm"
                onClick={createNewRecordHandler}
              >
                Create New
              </Link>
              <button className="btn-sm" onClick={addExistingHandler}>
                Add Existing
              </button>
            </div>
          </div>
        </Popup>
      </div>
      <div>
        <Table data={FakeTable} />
      </div>
    </>
  );
}

export default AccountDashboard;
