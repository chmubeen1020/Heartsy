import React, { useState } from "react";
import {
  CreditCard,
  Heart,
  Download,
  X,
  ChevronDown,
  Shield,
} from "lucide-react";

const BILLING_HISTORY = [
  {
    id: 1,
    date: "Jan 6, 2025",
    desc: "Pro Plan - Monthly",
    amount: "$1,500",
    invoice: "INV-2025-001",
  },
  {
    id: 2,
    date: "Dec 6, 2024",
    desc: "Pro Plan - Monthly",
    amount: "$1,500",
    invoice: "INV-2024-012",
  },
  {
    id: 3,
    date: "Nov 6, 2024",
    desc: "Pro Plan - Monthly",
    amount: "$1,500",
    invoice: "INV-2024-011",
  },
];

const BillingSettings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className=" animate-in fade-in duration-500 pb-10">
      <div className="space-y-4">
        <section className="border border-gray-100 rounded-2xl p-4 md:p-6 bg-white shadow-sm ">
          <div className="flex  justify-between items-start gap-2 md:gap-4 mb-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Current Subscription
              </h3>
              <p className="text-sm text-gray-500">
                Your current plan and usage details
              </p>
            </div>
            <button className="px-4 md:px-6 py-2 bg-primary text-white text-sm  rounded-lg hover:opacity-90 transition-all">
              Change Plan
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div className="flex items-center gap-4">
              <div className="bg-purple-50 p-3 rounded-2xl text-primary">
                <Heart size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-medium">Pro</span>
                  <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">
                    Active
                  </span>
                </div>
                <p className="text-sm text-gray-500">$1,500/month</p>
              </div>
            </div>
            <div>
              <p className="text-xs  text-gray-500 tracking-widest">
                Next Billing
              </p>
              <p className="text-base font-medium text-gray-800">02/15/2025</p>
            </div>
            <div>
              <p className="text-xs  text-gray-500 tracking-widest">
                Team Members
              </p>
              <p className="text-base font-medium text-gray-800">10 Users</p>
            </div>
            <div>
              <p className="text-xs  text-gray-500 tracking-widest">
                Credits Used this Months
              </p>
              <p className="text-base font-medium text-gray-800">10 Users</p>
            </div>
          </div>
        </section>

        {/* Payment Method Section */}
        <section className="border border-gray-100 rounded-2xl p-4 md:p-6 bg-white shadow-sm ">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Payment Method
              </h3>
              <p className="text-sm text-gray-500">
                Manage your payment information
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 bg-primary text-white text-sm rounded-lg hover:opacity-90 transition-all"
            >
              Update
            </button>
          </div>

          <div className="border border-gray-100 rounded-2xl p-5 flex items-center gap-4 w-full">
            <div className="bg-primary p-3 rounded-xl text-white">
              <CreditCard size={24} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="font-bold text-gray-800">•••• •••• •••• 4242</p>
                <span className="text-white bg-primary text-xs px-2 py-0.5 rounded-md ">
                  Active
                </span>
              </div>
              <p className=" text-gray-600">Expires 12/26</p>
            </div>
          </div>
        </section>

        {/* Billing History Section */}
        <section className="md:hidden border border-gray-100 rounded-2xl p-4 md:p-6 bg-white shadow-sm ">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Billing History
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            View and download your past invoices
          </p>

          {/* Responsive Table Wrapper */}
          <div className="overflow-x-auto -mx-6 md:mx-0">
            <div className="inline-block min-w-full align-middle px-6 md:px-0">
              <div className="min-w-full text-left">
                <div className="divide-y divide-gray-50">
                  {BILLING_HISTORY.map((item) => (
                    <div
                      key={item.id}
                      className="text-sm text-gray-700  transition-colors py-2 space-y-1"
                    >
                      <p className="font-medium">{item.date}</p>
                      <p className="text-gray-500">{item.desc}</p>
                      <p className=" text-gray-600">{item.amount}</p>
                      <p className="text-gray-400 text-sm">
                        {item.invoice}
                      </p>
                      <p className="text-right">
                        <button className="inline-flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs  hover:bg-gray-50 transition-all">
                          <Download size={14} /> PDF
                        </button>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hidden md:block border border-gray-100 rounded-2xl p-4 md:p-6 bg-white shadow-sm ">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Billing History
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            View and download your past invoices
          </p>

          {/* Responsive Table Wrapper */}
          <div className="overflow-x-auto -mx-6 md:mx-0 border rounded-lg">
            <div className="inline-block min-w-full align-middle px-6 md:px-0">
              <table className="min-w-full text-left">
                <thead>
                  <tr className=" bg-gray-200/60 border-gray-50 text-xs md:text-base ">
                    <th className="py-2 px-4 font-normal">Date</th>
                    <th className="py-2 px-4 font-normal">Description</th>
                    <th className="py-2 px-4 font-normal">Amount</th>
                    <th className="py-2 px-4 font-normal">Invoice</th>
                    <th className="py-2 px-4 font-normal text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {BILLING_HISTORY.map((item) => (
                    <tr
                      key={item.id}
                      className="text-sm text-gray-700 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-3 px-4 font-normal">{item.date}</td>
                      <td className="py-3 px-4 text-gray-500">{item.desc}</td>
                      <td className="py-3 px-4 font-normal text-gray-900">
                        {item.amount}
                      </td>
                      <td className="py-3 px-4 text-gray-400 font-normal">
                        {item.invoice}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button className="inline-flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-normal hover:bg-gray-50 transition-all">
                          <Download size={14} /> PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      {/* Current Subscription Section */}

      {/* Payment Modal Integration */}
      {isModalOpen && <PaymentModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

const PaymentModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200 "
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center py-4 px-6">
          <div className="flex items-center gap-3">
            <div className=" rounded-lg text-primary">
              <CreditCard size={20} />
            </div>
            <h2 className="text-lg font-medium text-gray-800">
              Update Payment Method
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-2 space-y-2 md:space-y-4">
          {/* Card Information */}
          <div className="space-y-2 md:space-y-6">
            <h4 className="text-sm md:text-base font-medium text-gray-900 tracking-wider">
              Card Information
            </h4>

            <div className="relative border-b border-gray-200 focus-within:border-primary transition-colors">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full bg-transparent outline-none py-2 text-gray-700 "
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
              <div className="relative border-b border-gray-200 focus-within:border-primary">
                <div className="flex items-center justify-between cursor-pointer py-2">
                  <span className="text-gray-400">Month</span>
                  <ChevronDown size={14} className="text-gray-400" />
                </div>
              </div>
              <div className="relative border-b border-gray-200 focus-within:border-primary">
                <div className="flex items-center justify-between cursor-pointer py-2">
                  <span className="text-gray-400">Year</span>
                  <ChevronDown size={14} className="text-gray-400" />
                </div>
              </div>
              <div className="relative border-b border-gray-200 focus-within:border-primary">
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full bg-transparent outline-none py-2 text-gray-700"
                />
              </div>
            </div>

            <div className="relative border-b border-gray-200 focus-within:border-primary transition-colors">
              <input
                type="text"
                placeholder="Name on Card"
                className="w-full bg-transparent outline-none py-2 text-gray-700"
              />
            </div>
          </div>

          {/* Billing Address */}
          <div className="space-y-2 pt-2">
            <h4 className="text-sm md:text-base font-medium text-gray-900  tracking-wider">
              Billing Address
            </h4>
            <div className="relative border-b border-gray-200 focus-within:border-primary transition-colors">
              <input
                type="text"
                placeholder="Address"
                className="w-full bg-transparent outline-none py-2 text-gray-700"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              <div className="relative border-b border-gray-200 focus-within:border-primary">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full bg-transparent outline-none py-2 text-gray-700"
                />
              </div>
              <div className="relative border-b border-gray-200 focus-within:border-primary">
                <input
                  type="text"
                  placeholder="State"
                  className="w-full bg-transparent outline-none py-2 text-gray-700"
                />
              </div>
              <div className="relative border-b border-gray-200 focus-within:border-primary">
                <input
                  type="number"
                  placeholder="ZIP Code"
                  className="w-full bg-transparent outline-none py-2 text-gray-700"
                />
              </div>
              <div className="relative border-b border-gray-200 focus-within:border-primary">
                <div className="flex items-center justify-between cursor-pointer py-2">
                  <span className="text-gray-400">Coutry</span>
                  <ChevronDown size={14} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Secure Message */}
          <div className="bg-primary/5 rounded-lg p-4 flex gap-4 border border-primary/10">
            <Shield className="text-primary shrink-0" size={20} />
            <div>
              <p className="text-sm text-primary">
                Your payment information is secure
              </p>
              <p className="text-xs text-primary/70 leading-relaxed">
                We use bank-level encryption to protect your data and never
                store your full credit card number.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 flex flex-col md:flex-row justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full md:w-auto px-8 py-2 border border-gray-200 text-gray-600  rounded-lg hover:bg-gray-100 transition-all text-sm"
          >
            Cancel
          </button>
          <button className="w-full md:w-auto px-8 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-all text-sm">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingSettings;
