import React, { useState } from 'react';

interface StatusBadgeProps {
  status: 'Active' | 'Inactive'; // Puedes agregar más estados si es necesario
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }:StatusBadgeProps) => {
  const [isActive, setIsActive] = useState(status === 'Active');

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <button
      onClick={handleClick}
      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
        isActive
          ? 'bg-green-100 text-green-800'
          : 'bg-red-100 text-red-800'
      } border border-transparent focus:outline-none focus:ring-1 focus:ring-offset-2 ${
        isActive ? 'focus:ring-green-500/50' : 'focus:ring-red-500/50'
      }`}
    >
      {isActive ? 'Active' : 'Inactive'}
    </button>
  );
};

export default StatusBadge;
