// src/components/user/HelpTooltip.jsx
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { FiX, FiCopy } from 'react-icons/fi';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../FirebaseConfig';

const HelpTooltip = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [user] = useAuthState(auth);

  const referralLink = user
    ? `https://rewear.com/signup?ref=${user.uid}`
    : 'https://rewear.com/signup';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Floating Question Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-xl border text-[#447d68] hover:bg-[#447d68] hover:text-white transition-all z-50"
        title="Learn about points"
      >
        <BsQuestionCircleFill className="w-6 h-6" />
      </button>

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
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

            {/* Explanation */}
            <div className="space-y-4 text-sm text-gray-800 leading-relaxed">
              <p>🧵 <strong>Upload a Product:</strong> +5 points</p>
              <p>🔁 <strong>Complete an Exchange:</strong> +15 points</p>
              <p>🎁 <strong>Refer & Earn:</strong> +20 points per signup via your referral link</p>
              <p>💱 <strong>Use Points:</strong> Redeem points to unlock exclusive listings or faster exchanges</p>
              <p>📈 <strong>More Points = More Trust</strong>: Earn badges, faster approvals & more visibility</p>
            </div>

            {/* Referral Box */}
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
