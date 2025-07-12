import React from 'react';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Mon', logins: 40, uploads: 24 },
  { name: 'Tue', logins: 30, uploads: 13 },
  { name: 'Wed', logins: 20, uploads: 22 },
  { name: 'Thu', logins: 27, uploads: 18 },
  { name: 'Fri', logins: 35, uploads: 28 },
  { name: 'Sat', logins: 23, uploads: 19 },
  { name: 'Sun', logins: 34, uploads: 30 },
];

const Reports = () => {
  return (
    <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-[#1a3d35] mb-4">Reports</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="logins" stroke="#1a3d35" strokeWidth={2} />
          <Line type="monotone" dataKey="uploads" stroke="#447d68" strokeDasharray="5 5" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Reports;
