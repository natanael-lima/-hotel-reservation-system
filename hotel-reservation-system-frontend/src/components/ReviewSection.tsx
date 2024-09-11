import React from 'react';

export default function ReviewSection() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      comment: 'Excellent service and beautiful rooms!',
      createdAt: '2024-09-05T14:00:00',
      user: { id: 101, username: 'john_doe' },
      hotel: { id: 1, name: 'Hotel California' }
    },
    {
      id: 2,
      rating: 3,
      comment: 'Average experience, but the location was great.',
      createdAt: '2024-09-08T16:00:00',
      user: { id: 102, username: 'jane_smith' },
      hotel: { id: 2, name: 'The Grand Budapest Hotel' }
    },
    {
      id: 3,
      rating: 4,
      comment: 'Very nice hotel, but the food could be better.',
      createdAt: '2024-09-10T18:00:00',
      user: { id: 103, username: 'michael_jordan' },
      hotel: { id: 3, name: 'The Plaza' }
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <h2 className="block sm:hidden text-2xl font-bold text-gray-500 capitalize p-4 border">Reviews</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Review ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comment</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hotel</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {reviews.map((review) => (
            <tr key={review.id}>
              <td className="px-6 py-4 whitespace-nowrap">{review.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{review.rating}</td>
              <td className="px-6 py-4 whitespace-nowrap">{review.comment}</td>
              <td className="px-6 py-4 whitespace-nowrap">{review.user.username}</td>
              <td className="px-6 py-4 whitespace-nowrap">{review.hotel.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{review.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
