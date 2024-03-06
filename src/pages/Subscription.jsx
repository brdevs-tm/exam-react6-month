import React, { Fragment } from "react";
import HomeMain from "../components/HomeMain";
import PremiumPlan from "../components/PremiumPlan";

const Subscription = () => {
  return (
    <Fragment>
      <main>
        <div className="container">
          <div className="premium-plan container mt-150px">
            <div className="premium-header flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div className="flex flex-col gap-14px">
                <span className="text-white text-38px">
                  Choose the plan that's right for you
                </span>
                <p className="text-gray-500 max-w-7xl text-18px">
                  Join StreamVibe and select from our flexible subscription
                  options tailored to suit your viewing preferences. Get ready
                  for non-stop entertainment!
                </p>
              </div>
              <div className="plan-duration flex items-center justify-between px-5 py-2 bg-black border border-black-12 rounded-lg ">
                <button className="rounded-md px-6 py-2 text-18px text-white transition-all duration-300 hover:bg-black-12">
                  Monthly
                </button>
                <button className="rounded-md px-6 py-2 text-18px text-white transition-all duration-300 hover:bg-black-12">
                  Yearly
                </button>
              </div>
            </div>
            <div className="premimu-pans-row flex items-center justify-center mt-80px flex-wrap gap-y-5 lg:justify-between">
              <PremiumPlan />
              <PremiumPlan />
              <PremiumPlan />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Column 1</th>
                  <th className="px-4 py-2">Column 2</th>
                  <th className="px-4 py-2">Column 3</th>
                  <th className="px-4 py-2">Column 4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Data 1</td>
                  <td className="border px-4 py-2">Data 2</td>
                  <td className="border px-4 py-2">Data 3</td>
                  <td className="border px-4 py-2">Data 4</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Data 5</td>
                  <td className="border px-4 py-2">Data 6</td>
                  <td className="border px-4 py-2">Data 7</td>
                  <td className="border px-4 py-2">Data 8</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Data 9</td>
                  <td className="border px-4 py-2">Data 10</td>
                  <td className="border px-4 py-2">Data 11</td>
                  <td className="border px-4 py-2">Data 12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Subscription;
