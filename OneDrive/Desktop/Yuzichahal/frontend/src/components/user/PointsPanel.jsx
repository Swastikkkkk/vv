import React from 'react';

const PointsPanel = () => {
  const points = 140;

  return (
    <div className="col-span-1 md:col-span-1 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold text-[#1a3d35] mb-4">Points Summary</h2>
      <p className="text-3xl font-bold text-[#519872]">{points} pts</p>
      <ul className="text-sm text-gray-600 mt-4 space-y-1">
        <li>+10 pts per item listed</li>
        <li>+30 pts per successful exchange</li>
        <li>-20 pts when redeeming an item</li>
      </ul>
    </div>
  );
};

export default PointsPanel;
