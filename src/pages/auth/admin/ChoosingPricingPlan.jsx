import { useState } from "react";
import { Icon, images, PricingIcon } from "../../../assets";

const pricingPlans = [
  {
    id: "pro",
    title: "Pro",
    description: "Lorem Ipsum emit Dummy text browser",
    priceMonthly: "$1,500/month after 14-day trial",
    users: "Up to 50 users",
    buttonText: "Start Free 14-day Trial",
    highlighted: false,
    icon: PricingIcon.Pro, // replace later
  },
  {
    id: "pro-plus",
    title: "Pro+",
    description: "Lorem Ipsum emit Dummy text browser",
    priceMonthly: "$2,500/month",
    users: "Up to 250 users",
    buttonText: "Pay Now",
    highlighted: true,
    icon: PricingIcon.ProPlus, // replace later
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description: "Lorem Ipsum emit Dummy text browser",
    priceMonthly: "Contact us for pricing",
    users: "Unlimited users",
    buttonText: "Contact Now",
    highlighted: false,
    icon: PricingIcon.Enterprise, // replace later
  },
];

const ChoosingPricingPlan = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="min-h-screen h-full relative bg-white overflow-hidden">
      <div className="absolute top-[60px] left-[60px]">
        <img src={images.BlackHeartsyLogo} alt="logo" className="w-24" />
      </div>
      <div className="absolute bottom-[60px] left-[60px]">
        <p className="text-sm text-[#2D2E33] mt-6 opacity-80">
          © 2026 Heartsy. All rights reserved
        </p>
      </div>
      <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col justify-center px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl font-semibold">Pick a Plan</h2>
            <p className="text-sm text-gray-500 mt-1">
              Estimated monthly cost based on number of users and total usage.
            </p>
          </div>

          {/* Toggle */}
          <div className="flex items-center gap-3">
            <span className={!yearly ? "text-black" : "text-gray-400"}>
              Monthly
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`w-12 h-6 rounded-full relative transition ${
                yearly ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition ${
                  yearly ? "translate-x-6" : ""
                }`}
              />
            </button>
            <span className={yearly ? "text-black" : "text-gray-400"}>
              Yearly
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl border border-gray-100 p-6 flex flex-col justify-between bg-sidebar`}
            >
              {/* Top */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <img src={plan.icon} alt={plan.title} className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">{plan.title}</h3>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-6">
                    {plan.description}
                  </p>

                  <p className="text-primary font-normal text-sm ">
                    {plan.priceMonthly}
                  </p>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-6 space-y-2">
                <div className="flex gap-2 items-center mb-2">
                  <img src={Icon.Peoples} alt="" className="w-5 h-5" />
                  <p className=" text-primary font-semibold">
                    {" "}
                    {plan.users}{" "}
                  </p>
                </div>

                <button
                  className={`w-full py-2 rounded-lg text-sm font-normal ${
                    plan.highlighted
                      ? "bg-primary text-white"
                      : "bg-primary/90 text-white"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer buttons */}
        <div className="flex justify-end gap-4 mt-10">
          <button className="border px-4 py-2 rounded-lg text-sm">Back</button>
          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm">
            Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChoosingPricingPlan;
