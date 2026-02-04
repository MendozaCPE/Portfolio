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

            const contentType = res.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                const text = await res.text();
                console.error("Non-JSON response received:", text);
                throw new Error("Server returned an invalid response. This often happens if the backend isn't configured correctly or is waking up. Please try again in 30 seconds.");
            }

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
