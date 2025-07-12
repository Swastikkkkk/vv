// src/components/user/HelpTooltip.jsx
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const HelpTooltip = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Question Icon Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-[#447d68] hover:text-[#2d5b4b] text-xl font-bold transition absolute top-6 right-6"
        title="Learn about points"
      >
        ?
      </button>

      {/* Modal Dialog */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Dialog Panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white max-w-md w-full rounded-xl shadow-xl p-6">
            <Dialog.Title className="text-xl font-semibold text-[#1a3d35] mb-4">
              📈 How Points Work
            </Dialog.Title>
            <div className="space-y-3 text-sm text-gray-700">
              <p>✅ <strong>Upload a Product:</strong> Earn 5 points.</p>
              <p>✅ <strong>Complete an Exchange:</strong> Earn 15 points.</p>
              <p>🎉 <strong>Referral Bonus:</strong> Invite friends using your referral link and earn <span className="text-green-700 font-semibold">20 points</span> per successful signup!</p>
              <p>📊 <strong>Points = Credibility:</strong> More points = higher trust level & perks!</p>
            </div>

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
