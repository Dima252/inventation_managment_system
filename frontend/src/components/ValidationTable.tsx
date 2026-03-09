'use client';

import React from 'react';

export default function ValidationTable() {
    const dummyData = [
        { id: 1, name: 'John Doe', phone: '+1234567890', isValid: true },
        { id: 2, name: 'Jane Smith', phone: 'invalid_number', isValid: false },
    ];

    return (
        <div className="overflow-x-auto mt-6">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">WhatsApp Number</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {dummyData.map((guest) => (
                        <tr key={guest.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{guest.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{guest.phone}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                {guest.isValid ? (
                                    <span className="text-green-500 flex items-center">
                                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg> Valid
                                    </span>
                                ) : (
                                    <span className="text-red-500 flex items-center">
                                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg> Invalid
                                    </span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
