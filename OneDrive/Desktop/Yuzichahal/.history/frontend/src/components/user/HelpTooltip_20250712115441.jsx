import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { FiX, FiCopy } from 'react-icons/fi';
import { BsQuestionCircleFill } from 'react-icons/bs';

const HelpTooltip = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const referralLink = `https://rewear.com/signup?ref=swastik123`; // dynamic UID can be inserted later

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Floating Question Mark */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-xl border text-[#447d68] hover:bg-[#447d68] hover:text-white transition-all z-50"
        title="Learn about points"
      >
        <BsQuestionCircleFill className="w-6 h-6" />
      </button>

      {/* Dialog Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        {/* Blurred Backdrop */}
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white/70 backdrop-blur-xl p-6 shadow-2xl border border-[#c4dcd4] animate-fade-in relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Title */}
            <Dialog.Title className="text-2xl font-bold text-[#1a3d35] mb-5">
              🌟 How ReWear Points Work
            </Dialog.Title>

            {/* Description */}
            <div className="space-y-4 text-sm text-gray-800 leading-relaxed">
              <p>🧵 <strong>Upload a Product:</strong> Get <span className="text-green-600 font-semibold">+5 points</span> for every product listed.</p>
              <p>🔁 <strong>Complete an Exchange:</strong> Earn <span className="text-green-600 font-semibold">+15 points</span> for every successful swap.</p>
              <p>🎁 <strong>Refer & Earn:</strong> Share your referral link and earn <span className="text-green-600 font-semibold">+20 points</span> for every friend who signs up.</p>
              <p>💱 <strong>Use Points to Exchange:</strong> Use your points to initiate or accept exchanges from others.</p>
              <p>🚀 <strong>Points = Trust:</strong> More points = higher credibility, priority access, and future perks!</p>
            </div>

            {/* Referral Link Box */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-[#1a3d35] mb-1">
                Your Referral Link:
              </label>
              <div className="flex items-center bg-gray-100 border rounded-lg px-3 py-2">
                <span className="flex-1 text-xs break-all text-[#1a3d35]">{referralLink}</span>
                <button
                  onClick={handleCopy}
                  className="ml-2 text-sm text-[#447d68] hover:text-[#2d5b4b] flex items-center"
                >
                  <FiCopy className="w-4 h-4 mr-1" />
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 text-right">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-[#447d68] text-white rounded-lg hover:bg-[#366755] transition"
              >
                Got it!
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default HelpTooltip;
