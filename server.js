const express = require('express');
const app = express();
const port = 3000;

// Define your portfolio data
const portfolio = {
    name: "Wasif Hussain",
    title: "Full Stack Developer",
    about: "I am a full-stack developer specializing in MERN and Next.js. I also have experience with Go and React.",
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "Next.js", "Go"],
    projects: [
        {
            name: "Linktree Clone",
            description: "A personal link-sharing platform using React, Supabase, and Tailwind.",
            link: "https://github.com/your-linktree-repo",
        },
        {
            name: "E-Commerce Platform",
            description: "A Go-based backend with a React frontend.",
            link: "https://github.com/your-ecommerce-repo",
        },
        {
            name: "Chat App",
            description: "A chat application using Next.js, Tailwind, MongoDB, and Socket.IO.",
            link: "https://github.com/your-chat-app-repo",
        }
    ],
    contact: {
        email: "wasifhussain@example.com",
        github: "https://github.com/your-github",
        linkedin: "https://linkedin.com/in/your-linkedin"
    }
};

// Define an endpoint to serve the portfolio as JSON
app.get('/portfolio', (req, res) => {
    res.json(portfolio);
});

// Start the server
app.listen(port, () => {
    console.log(`Portfolio API running at http://localhost:${port}`);
});
