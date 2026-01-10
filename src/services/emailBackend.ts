export const emailBackend = {
    sendMessage: async (data: {
        name: string;
        email: string;
        subject: string;
        message: string;
    }) => {
        try {
            const res = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            const result = await res.json();

            if (!res.ok || !result.success) {
                throw new Error(result.message || "Failed to send message");
            }

            return result;
        } catch (error) {
            if (error instanceof TypeError && error.message === 'Failed to fetch') {
                throw new Error('Cannot connect to server. Please make sure the server is running on port 5000. Run "npm run server" in a separate terminal.');
            }
            if (error instanceof Error) {
                throw error;
            }
            throw new Error('Network error. Please check if the server is running on port 5000.');
        }
    }
};
