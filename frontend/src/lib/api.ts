const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const api = {
    uploadGuests: async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch(`${API_BASE_URL}/guests/upload`, {
            method: 'POST',
            body: formData,
        });
        return response.json();
    },

    getGuests: async () => {
        const response = await fetch(`${API_BASE_URL}/guests`);
        return response.json();
    },

    sendPhase: async (phase: string) => {
        const response = await fetch(`${API_BASE_URL}/guests/send-phase`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phase }),
        });
        return response.json();
    }
};
