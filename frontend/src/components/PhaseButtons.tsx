'use client';

import React from 'react';

export default function PhaseButtons() {
    const handleSend = (phase: string) => {
        console.log(`Sending phase: ${phase}`);
    };

    return (
        <div className="flex gap-4 mt-6">
            <button
                onClick={() => handleSend('1-Month')}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
                Send 1-Month Invite
            </button>
            <button
                onClick={() => handleSend('1-Week')}
                className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
                Send 1-Week Reminder
            </button>
            <button
                onClick={() => handleSend('1-Day')}
                className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
            >
                Send 1-Day Reminder
            </button>
        </div>
    );
}
