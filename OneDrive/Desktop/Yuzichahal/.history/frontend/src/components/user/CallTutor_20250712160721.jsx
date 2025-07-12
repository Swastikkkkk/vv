import React, { useState } from 'react';
import axios from 'axios';

const CallTutor = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCall = async () => {
    if (!phoneNumber) {
      alert('⚠️ Please enter a phone number.');
      return;
    }

    setLoading(true);
    setStatus('Calling...');

    try {
      const res = await axios.post('http://localhost:5800/api/call', {
        to: phoneNumber,
      });

      if (res.data.success) {
        setStatus(`✅ Call initiated! Call SID: ${res.data.callSid}`);
      } else {
        setStatus('❌ Call failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus(`❌ Error: ${err.response?.data?.error || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f6f5] p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-[#1a3d35] mb-4">Call AI Tutor</h2>
        <input
          type="tel"
          placeholder="Enter phone number (with country code)"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg mb-4"
        />
        <button
          onClick={handleCall}
          disabled={loading}
          className="w-full bg-[#447d68] text-white py-3 rounded-lg hover:bg-[#366755] transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? 'Calling...' : 'Call Now'}
        </button>
        {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
      </div>
    </div>
  );
};

export default CallTutor;
