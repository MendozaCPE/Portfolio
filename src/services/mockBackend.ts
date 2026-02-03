export const mockBackend = {
    sendMessage: async (data: {
        name: string;
        email: string;
        subject: string;
        message: string;
    }) => {
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok || !result.success) {
                throw new Error(result.message || `Failed to send message: ${res.status}`);
            }

            return result;
        } catch (error) {
            if (error instanceof TypeError && error.message === 'Failed to fetch') {
                throw new Error('Cannot connect to the mail server. This might be due to a network issue or the server being offline. Please try again later.');
            }
            if (error instanceof Error) {
                throw error;
            }
            throw new Error('Network error. Please check if the server is running on port 5000.');
        }
    },
};
