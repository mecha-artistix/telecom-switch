import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex h-full w-full basis-20 flex-wrap items-center justify-between border-b border-b-k_light_gray">
      <div className="w-[300px] flex-shrink-0 grow-0 px-8">
        <Link to="/">
          <h1 className="text-4xl font-extrabold">switch24</h1>
        </Link>
      </div>
      <div className="flex flex-grow items-end justify-between gap-3 px-4">
        <div>
          <p>Account/Carrier</p>
          <input className="border border-b-k_light_gray p-1 "></input>
        </div>
        <div className="flex basis-3/4 justify-around gap-3">
          <div className="grow basis-40">
            <div>Max CPS</div>
            <div className="border border-b-k_light_gray bg-[#D9D9D9] p-1">
              BOX
            </div>
          </div>
          <div className="grow basis-32">
            <div>Max SESS</div>
            <div className="bg-[#D9D9D9] p-1">BOX</div>
          </div>
          <div className="grow basis-32">
            <div>Blocked Account Cap</div>
            <div className="bg-[#D9D9D9] p-1">BOX</div>
          </div>
          <div className="grow basis-32">
            <div>Blocked ID</div>
            <div className="bg-[#D9D9D9] p-1">BOX</div>
          </div>
        </div>
        <button className="k_btn">Filter</button>
      </div>
    </div>
  );
}

export default Header;
