import React from 'react';

interface StatusBadgeProps {
  status: 'Active' | 'Inactive'; // Puedes agregar más estados si es necesario
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
      status === 'Active'
        ? 'bg-green-100 text-green-800'
        : 'bg-red-100 text-red-800'
    }`}>
      {status}
    </span>
  );
};

export default StatusBadge;
