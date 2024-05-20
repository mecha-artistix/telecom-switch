function AccountOverview() {
  return (
    <div className="flex flex-wrap">
      {Array.from({ length: 13 }, (_, i) => i + 1).map((i) => (
        <div
          key={Math.random()}
          className="hover:border-k_blue m-5 flex  h-24 w-60 flex-col justify-center border pl-2 transition hover:shadow-[0px_5px_5px_0px_rgba(0,0,0,0.3)] "
        >
          <p className="text-xl font-semibold">Customers</p>
          <p className="text-lg font-bold">1234</p>
        </div>
      ))}
    </div>
  );
}

export default AccountOverview;
