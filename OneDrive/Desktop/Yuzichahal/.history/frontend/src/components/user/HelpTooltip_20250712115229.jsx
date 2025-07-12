import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { FiX, FiCopy } from 'react-icons/fi';

const HelpTooltip = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const referralLink = `https://rewear.com/signup?ref=swastik123`; // change with dynamic UID if needed

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Circular Floating Question Mark Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#447d68] text-white text-lg font-bold shadow-md hover:bg-[#366755] transition z-50"
        title="Learn about points"
      >
        ?
      </button>

      {/* Modal Dialog */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

        {/* Dialog Panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white max-w-md w-full rounded-2xl shadow-2xl p-6 relative animate-fade-in">
            {/* Close Icon */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <FiX className="w-5 h-5" />
            </button>

            <Dialog.Title className="text-2xl font-semibold text-[#1a3d35] mb-4 flex items-center gap-2">
              📈 How Points Work
            </Dialog.Title>

            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <p>✅ <strong>Upload a Product:</strong> Earn 5 points.</p>
              <p>✅ <strong>Complete an Exchange:</strong> Earn 15 points.</p>
              <p>🎉 <strong>Referral Bonus:</strong> Invite friends using your referral link below and earn <span className="text-green-700 font-semibold">20 points</span> per signup!</p>
              <p>📊 <strong>Points = Credibility:</strong> More points = higher trust level & perks!</p>
            </div>

            {/* Referral Link */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Referral Link:</label>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
                <span className="flex-1 text-xs break-all text-[#1a3d35]">{referralLink}</span>
                <button
                  onClick={handleCopy}
                  className="ml-2 text-sm text-[#447d68] hover:text-[#2d5b4b]"
                >
                  <FiCopy className="inline-block w-4 h-4 mr-1" />
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* CTA */}
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
