import { useState } from "react";
import { X, ChevronUp, ChevronDown } from "lucide-react";
import { Icon, PricingIcon } from "../../../../../assets";
import InvoiceManagement from "./InvoiceManagement";

const SubscrptionAndBiling = () => {
  const [plans, setPlans] = useState([
    {
      id: "pro",
      title: "Pro",
      description: "Lorem Ipsum emit Dummy text browser",
      priceMonthly: "1500",
      users: "50",
      trial: "14",
      highlighted: false,
      contactUs: false, // Added property
      icon: PricingIcon.Pro,
    },
    {
      id: "pro-plus",
      title: "Pro+",
      description: "Lorem Ipsum emit Dummy text browser",
      priceMonthly: "2500",
      users: "250",
      trial: "14",
      highlighted: true,
      contactUs: false, // Added property
      icon: PricingIcon.ProPlus,
    },
    {
      id: "enterprise",
      title: "Enterprise",
      description: "Lorem Ipsum emit Dummy text browser",
      priceMonthly: "0",
      users: "Unlimited",
      trial: "0",
      highlighted: false,
      contactUs: true, // Default true for Enterprise
      icon: PricingIcon.Enterprise,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null);

  const handleEditClick = (plan) => {
    setCurrentPlan({ ...plan });
    setIsModalOpen(true);
  };

  const handleUpdate = () => {
    setPlans(plans.map(p => p.id === currentPlan.id ? currentPlan : p));
    setIsModalOpen(false);
  };

  return (
    <div className="w-full p-2 relative">
      <div className="mb-4">
        <h2 className="text-xl text-gray-800">Available Subscription Plans</h2>
        <p className="text-[#6C6E7E]">Manage subscription plans</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div key={plan.id} className="rounded-xl border border-gray-100 p-4 flex flex-col justify-between bg-sidebar shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <img src={plan.icon} alt={plan.title} className="w-6 h-6 xl:w-8 xl:h-8" />
                <h3 className="text-xl md:text-2xl 2xl:text-3xl font-bold">{plan.title}</h3>
              </div>
              <div className="text-center">
                <p className="text-sm xl:text-base text-gray-500 mb-6">{plan.description}</p>
                {/* Conditional Pricing Text */}
                <p className="text-primary font-semibold text-sm xl:text-base ">
                  {plan.contactUs 
                    ? "Contact us for pricing" 
                    : `$${Number(plan.priceMonthly).toLocaleString()}/month after ${plan.trial}-day trial`
                  }
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex gap-2 items-center mb-2">
                <img src={Icon.Peoples} alt="" className="w-5 h-5 xl:w-6 xl:h-6" />
                <p className="text-primary font-semibold xl:text-lg">
                  {plan.users === "Unlimited" ? "Unlimited users" : `Up to ${plan.users} users`}
                </p>
              </div>
              <button
                onClick={() => handleEditClick(plan)}
                className="w-full py-2 rounded-xl text-sm font-medium bg-primary/90 text-white hover:bg-primary transition-all"
              >
                Edit Plan
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <InvoiceManagement/>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md rounded-xl p-6 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-gray-800">Edit Plan</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-1 hover:bg-gray-100 rounded-full">
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="relative border-b border-gray-200 focus-within:border-primary">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Plan Name</label>
                <input 
                  type="text" 
                  value={currentPlan?.title} 
                  onChange={(e) => setCurrentPlan({...currentPlan, title: e.target.value})}
                  className="w-full py-2 outline-none text-gray-700 bg-transparent" 
                />
              </div>

              {/* Pricing Field with Disable logic */}
              <div className={`relative border-b transition-colors ${currentPlan?.contactUs ? 'border-gray-100' : 'border-gray-200 focus-within:border-primary'}`}>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Price</label>
                <input 
                  type="text" 
                  disabled={currentPlan?.contactUs}
                  value={currentPlan?.contactUs ? "Contact us for pricing" : currentPlan?.priceMonthly} 
                  onChange={(e) => setCurrentPlan({...currentPlan, priceMonthly: e.target.value})}
                  className={`w-full py-2 outline-none text-gray-700 bg-transparent ${currentPlan?.contactUs ? 'text-gray-300 italic cursor-not-allowed' : ''}`} 
                />
              </div>

              {/* Toggle Field */}
              <div className="flex justify-between items-center py-2">
                <label className="text-sm font-medium text-gray-500">Show "Contact Us" instead of price</label>
                <button 
                  onClick={() => setCurrentPlan({...currentPlan, contactUs: !currentPlan.contactUs})}
                  className={`w-10 h-5 rounded-full transition-colors relative ${currentPlan?.contactUs ? 'bg-primary' : 'bg-gray-200'}`}
                >
                  <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${currentPlan?.contactUs ? 'left-6' : 'left-1'}`} />
                </button>
              </div>

              {/* Users Allowed */}
              <div className="flex justify-between items-center border-b border-gray-200 py-2">
                <label className="text-sm font-medium text-gray-500">Users Allowed</label>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-gray-800">{currentPlan?.users}</span>
                  <div className="flex flex-col">
                    <button onClick={() => {
                        const val = currentPlan.users === "Unlimited" ? 1000 : parseInt(currentPlan.users) + 1;
                        setCurrentPlan({...currentPlan, users: val.toString()});
                    }}><ChevronUp size={14} className="text-gray-400 hover:text-primary" /></button>
                    <button onClick={() => {
                        const val = currentPlan.users === "Unlimited" ? 0 : Math.max(0, parseInt(currentPlan.users) - 1);
                        setCurrentPlan({...currentPlan, users: val.toString()});
                    }}><ChevronDown size={14} className="text-gray-400 hover:text-primary" /></button>
                  </div>
                </div>
              </div>

              {/* Free Trial */}
              <div className="flex justify-between items-center border-b border-gray-200 py-2">
                <label className="text-sm font-medium text-gray-500">Free Trial Days</label>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-gray-800">{currentPlan?.trial}</span>
                  <div className="flex flex-col">
                    <button onClick={() => setCurrentPlan({...currentPlan, trial: (parseInt(currentPlan.trial) + 1).toString()})}><ChevronUp size={14} className="text-gray-400 hover:text-primary" /></button>
                    <button onClick={() => setCurrentPlan({...currentPlan, trial: Math.max(0, parseInt(currentPlan.trial) - 1).toString()})}><ChevronDown size={14} className="text-gray-400 hover:text-primary" /></button>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={handleUpdate}
              className="w-full mt-10 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary transition-all"
            >
              Update Plan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscrptionAndBiling;