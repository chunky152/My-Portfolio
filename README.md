<h2 align="center">
  Platform Engineer Portfolio Website<br/>
</h2>
<br/>

## About the Project

This is the personal portfolio website of **Muwanguzi Alvin Kiggundu**, a Platform Engineer. It is a modern, responsive React web application designed to showcase developer skills, tools, active projects, and professional experience.

The site is built to provide an interactive and visually polished representation of a software engineer's profile, helping to connect with recruiters, team leads, and other developers.

### Technologies Used

- **Frontend Framework:** React.js
- **Styling:** CSS3 & React-Bootstrap
- **Icons:** React Icons & Custom SVG Icons
- **Animation:** tsparticles & Typewriter Effect

## Key Features

* **🎨 Sleek Dark Theme:** Implemented with the customized "Neon Ocean" color palette featuring vibrant cyan accents and deep backgrounds.
* **📖 Portfolio Sections:** Home, About (Skills & Developer Tools), Projects (with GitHub integration), and an interactive Resume viewer.
* **📱 Fully Responsive Layout:** Fits perfectly across multiple devices and screen sizes.
* **⚡ Modern Animations:** Features interactive parallax tilt effects and smooth background particle integrations.

## Getting Started

Clone down this repository. You will need `node.js` and `git` installed globally on your machine.

### Live Deployment

View the live portfolio at: **[https://chunky152.github.io/My-Portfolio](https://chunky152.github.io/My-Portfolio)**

## 🛠 Installation and Setup Instructions

1. Installation: `npm install`

2. In the project directory, you can run: `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

## Usage Instructions

Open the project folder and navigate to `/src/components/`. <br/>
You will find all the components used, and you can edit your information accordingly.

## 🚀 CI/CD & Deployment

This project uses **GitHub Actions** for automated continuous integration and deployment:

- **Workflow:** [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
- **Build & Test:** Runs on every push and pull request
- **Lighthouse CI:** Performance, Accessibility, Best Practices, and SEO audits
- **GitHub Pages:** Automatic deployment to [https://chunky152.github.io/My-Portfolio](https://chunky152.github.io/My-Portfolio) on main branch pushes

### Lighthouse CI Auditing

The site is continuously audited using [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) with the following thresholds:

- **Performance:** warn at < 90%
- **Accessibility:** error at < 90%
- **Best Practices:** warn at < 90%
- **SEO:** warn at < 90%

View audit reports in GitHub Actions workflow runs.

### Show your support

Give a ⭐ if you like this website!
