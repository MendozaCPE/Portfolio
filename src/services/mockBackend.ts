
export const mockBackend = {
    sendMessage: async (data: { name: string; email: string; subject: string; message: string }) => {
        console.log("Sending message to backend...", data);
        return new Promise<{ success: boolean; message: string }>((resolve) => {
            setTimeout(() => {
                resolve({ success: true, message: "Message sent successfully!" });
            }, 1000);
        });
    }
};
