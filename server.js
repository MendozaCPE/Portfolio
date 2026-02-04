import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Move API routes BEFORE static files to ensure they are handled first
app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ success: false, message: "Missing fields" });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, message: "Invalid email address" });
    }

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    if (!user || !pass) {
        console.log("Email credentials not set, skipping actual email send.");
        return res.json({ success: true, message: "Email sent (mock mode)" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: { user, pass },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${user}>`,
            to: user,
            replyTo: email,
            subject: `[Contact] ${escapeHtml(subject)}`,
            html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
        });

        res.json({ success: true, message: "Email sent successfully!" });
    } catch (err) {
        console.error("Email send error:", err);
        const errorMessage = err instanceof Error ? err.message : "Failed to send email. Please try again later.";
        res.status(500).json({ success: false, message: errorMessage });
    }
});

// Serve static files from the "build" directory
app.use(express.static("build"));

// Import path for catch-all route (SPA support)
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All other GET requests not handled will return the index.html (SPA routing)
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
});



// Helper function to escape HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return String(text).replace(/[&<>"']/g, m => map[m]);
}

// Route was moved up for priority




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
