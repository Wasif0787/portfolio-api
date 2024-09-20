const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Define your portfolio data
const portfolio = {
    name: "Wasif Hussain",
    title: "Full Stack Developer Extraordinaire",
    about: "I am a full-stack developer specializing in MERN. I also have experience with Next.js and an unhealthy obsession with movies.",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "Express", "EJS", "SQL", "MongoDB", "Java"],
    experience: [{
        name: "Full Stack Developer Intern",
        company: "Solvative",
        year: "2024",
        funFact: "I fixed bugs before they even knew they were bugs!"
    }],
    projects: [
        {
            title: "ImageFusion.ai",
            technology: "Next.js",
            links: {
                live: "https://imageaifusion.vercel.app/",
                github: "https://github.com/Wasif0787/Clloudinary-SAAS"
            }
        },
        {
            title: "Threads Clone",
            technology: "MERN",
            links: {
                live: "https://threads-backend-kzv5.onrender.com/",
                github: "https://github.com/Wasif0787/Threads-Clone"
            }
        },
        {
            title: "Blog Page",
            technology: "HTML, CSS, JS, EJS, NodeJS, MongoDB",
            links: {
                live: "https://blog-v3-68i7.onrender.com/",
                github: "https://github.com/Wasif0787/blog-v3"
            }
        },
        {
            title: "Secrets Keeper",
            technology: "HTML, CSS, JS, EJS, NodeJS, MongoDB with User Authentication",
            links: {
                live: "https://secret-message-4uap.onrender.com/",
                github: "https://github.com/Wasif0787/SecretsFinder"
            }
        },
        {
            title: "Student Management System",
            technology: "HTML, CSS, PHP, MySQL",
            links: {
                live: "https://student-management-system-wasif.000webhostapp.com/",
                github: "https://github.com/Wasif0787/School-Management-System"
            }
        },
        {
            title: "Covid Tracker",
            technology: "React.js, Typescript",
            links: {
                live: "https://covid-tracker-wasif.netlify.app/",
                github: "https://github.com/Wasif0787/Covid-Tracker"
            }
        },
        {
            title: "Contact Management System",
            technology: "React.js, Redux",
            links: {
                live: "https://cms-redux.netlify.app/",
                github: "https://github.com/Wasif0787/Contact-Management-System"
            }
        }
    ],
    education: [{
        name: "Bachelor of Technology",
        degree: "Computer Science and Engineering",
        institute: "Aliah University",
        year: "2020-2024",
        score: "8.64",
        funFact: "Graduated with honors and a collection of late-night coding stories."
    }],
    contact: {
        email: "wasifhussain@example.com",
        github: "https://github.com/Wasif0787",
        linkedin: "https://www.linkedin.com/in/787wasifhussain/",
        funFact: "Send me an email, and I'll reply faster than you can say 'Hello World!'"
    }
};

// Route to get the full portfolio
app.get('/portfolio', (req, res) => {
    res.json({
        message: "Here is my full portfolio. Buckle up for an awesome ride! 🚀 Too tired to read it all? Check out each section individually: `/about`, `/skills`, `/experience`, `/projects`, `/education`, `/contact`. Enjoy!",
        portfolio
    });
});


app.get('/portfolio/about', (req, res) => {
    res.json({
        message: "About me: The legend, the myth, the coder!",
        about: portfolio.about
    });
});

app.get('/portfolio/skills', (req, res) => {
    res.json({
        message: "Skills that make me a coding wizard.",
        skills: portfolio.skills
    });
});

app.get('/portfolio/experience', (req, res) => {
    res.json({
        message: "My professional experience: Where the magic happens.",
        experience: portfolio.experience
    });
});

app.get('/portfolio/projects', (req, res) => {
    res.json({
        message: "Projects I’ve built: More than just code!",
        projects: portfolio.projects
    });
});

app.get('/portfolio/education', (req, res) => {
    res.json({
        message: "Education: Where I learned to turn coffee into code.",
        education: portfolio.education
    });
});

app.get('/portfolio/contact', (req, res) => {
    res.json({
        message: "Contact me: Let’s chat about coding or coffee!",
        contact: portfolio.contact
    });
});

app.get('/', (req, res) => {
    res.json('Welcome to my portfolio API! For a fun journey, visit /portfolio. Ready to dive in?');
});

// Error handling
app.use((req, res, next) => {
    res.status(404).json({
        error: "Oops! Route not found.",
        message: "Looks like you took a wrong turn. The route you are looking for does not exist."
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: "Yikes! Internal Server Error.",
        message: "Something went wrong. We’re on it—just a little bit of code magic needed."
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Portfolio API is live at http://localhost:${port}. Get ready for a fun coding adventure!`);
});