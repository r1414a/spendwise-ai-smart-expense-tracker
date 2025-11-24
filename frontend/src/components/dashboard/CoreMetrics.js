export default async function CoreMetrics() {
  const res = await fetch(`${process.env.API_URL}/api/expense/core-metrics`, {
    method: "GET",
  });
  const { result } = await res.json();
  console.log(result);
  return (
    <section className="max-w-screen-xl mx-auto pt-40 pb-32 px-4 md:px-32">
      <div className="flex flex-col lg:flex-row gap-10">
        {Object.entries(result).map(([key, value]) => (
          <div key={key} className="z-30 relative basis-1/2 p-8 md:p-10 bg-white rounded-xl border border-lightgray/40 shadow-lg shadow-lightgray/20 flex flex-col gap-6 justify-start items-center">
            <h2 className="absolute -left-5 md:-left-10 top-0 -rotate-30 text-center capitalize text-darkblue font-medium text-md md:text-xl">
              {key} Month
            </h2>
            <ul className="flex gap-10">
              <li className="text-center">
                <p className="text-lightred text-lg md:text-xl font-bold">
                  ₹{value.totalSpend}
                </p>
                <span className="text-gray text-xs sm:text-sm tracking-tight md:tracking-wider">
                  Total spend
                </span>
              </li>
              <li className="text-center">
                <p className="text-lightred text-lg md:text-xl font-bold">
                  ₹{value.avgPerDay}/day
                </p>
                <span className="text-gray text-xs sm:text-sm tracking-tight md:tracking-wider">
                  Average per day
                </span>
              </li>
            </ul>
            <div className="space-y-3 w-full">
              <ul className="flex gap-2">
                {Object.entries(value.top3Categories).map(([key, value]) => (
                  <li
                    key={key}
                    className="bg-lightblue p-2 sm:p-2.5 rounded-xl flex-1 space-y-1"
                  >
                    <p className="text-lg md:text-xl text-lightred text-center  font-bold">
                      ₹{value}
                    </p>
                    <p className="text-gray text-xs sm:text-sm text-center tracking-tight md:tracking-wider">
                      {key}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="text-center text-gray font-medium text-xs sm:text-sm tracking-tight md:tracking-wider">
                Top 3 categories
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
