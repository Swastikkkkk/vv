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
      {/* Floating Help Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-[#4a9e87] to-[#2c5f4f] text-white shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300 z-50"
        title="How points work"
      >
        <BsQuestionCircleFill className="w-7 h-7" />
      </button>

      {/* Modal Dialog */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-lg rounded-3xl bg-white/80 backdrop-blur-xl border border-[#c5e3da] p-8 shadow-2xl animate-fade-in relative">
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Title */}
            <Dialog.Title className="text-2xl font-semibold text-[#1c4034] mb-5 flex items-center gap-2">
              🌿 How ReWear Points Work
            </Dialog.Title>

            {/* Content */}
            <div className="space-y-4 text-sm text-gray-800 leading-relaxed">
              <p>🧵 <strong>Upload a Product:</strong> Earn <span className="text-[#2f6453] font-semibold">+5</span> points</p>
              <p>🔁 <strong>Complete an Exchange:</strong> Earn <span className="text-[#2f6453] font-semibold">+15</span> points</p>
              <p>🎁 <strong>Refer & Earn:</strong> Get <span className="text-[#2f6453] font-semibold">+20</span> points per successful referral</p>
              <p>💱 <strong>Use Points:</strong> Unlock premium listings or enjoy faster exchanges</p>
              <p>📈 <strong>Points = Trust:</strong> Gain badges, quicker approvals & more visibility</p>
            </div>

            {/* Referral Link */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-[#1c4034] mb-2">
                Your Referral Link
              </label>
              <div className="flex items-center bg-[#eef7f3] border border-[#b6d8cb] rounded-lg px-3 py-2">
                <span className="flex-1 text-xs break-all text-[#2f5e4d]">{referralLink}</span>
                <button
                  onClick={handleCopy}
                  className="ml-3 text-sm text-[#447d68] hover:text-[#2d5b4b] flex items-center transition"
                >
                  <FiCopy className="w-4 h-4 mr-1" />
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* Got It CTA */}
            <div className="mt-6 text-right">
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 bg-[#3c7e6b] text-white rounded-xl hover:bg-[#2c5f4f] transition shadow-md"
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
